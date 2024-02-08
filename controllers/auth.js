const hashing = require('bcryptjs');
const User = require('../models/user');
const Token = require("../models/token-model");
const ServiceToken = require('../services/ServiceJwtToken')



module.exports.login = async function loginUser (req,res){
    try{
        const {login, password} = req.body;
        const existUser = await User.findOne({where:{login:login}})
        if (!existUser){
            res.status(403).json({
                result:"Пользователь не найден"
            })
            return;
        }
        const result = await hashing.compareSync(password,existUser.dataValues.password)
        if (!result){
            res.status(403).json({
                result:"Неправильные данные"
            })
            return;
        }
        const JWTtokens = await ServiceToken.generateToken({id:existUser.dataValues.id,login})
        await ServiceToken.saveToken(existUser.dataValues.id,JWTtokens.refreshToken)
        // res.json({JWTtokens})
        res.cookie('refreshToken',JWTtokens.refreshToken,{httpOnly:true,maxAge: 864000000})
        res.status(200).json({
            reload:true,
            JWTtokens
        })
    }catch (e){
        console.log(e)
        res.status(500).json({
            result:"Ошибка обработки"
        })
    }
}

module.exports.register = async function register (req,res){
    try{
        
        const {login,password,nickname} = req.body
        const existUser = await User.findOne({where:{login:login}})
        if(existUser){
            res.status(401).json({
                error:"Данный пользователь уже существует",
            })
            return;
        }
        const hashpass = await hashing.hashSync(password, 15);
        const newUser = await User.create({nickname:nickname, login:login, password:hashpass});
        const JWTtokens = await ServiceToken.generateToken({id:newUser.dataValues.id, login})

        await ServiceToken.saveToken(newUser.dataValues.id,JWTtokens.refreshToken)
        res.cookie('refreshToken', JWTtokens.refreshToken,{maxAge: 864000000, httpOnly:true} )
        res.status(200).json({
            login:true
        })
        return;
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Ошибка регистрации',error:`${error}`,test:`${req.body}`})
    }
    
}
module.exports.refreshToken = async function refresh(req,res) {
    try {
        const {refreshToken} = req.cookies
        if (!refreshToken){return res.status(404).json({message:"Empty token"})}

        const userData = await ServiceToken.verifyRefreshToken(refreshToken)
        const tokenFromDb = await Token.findOne({where:{refreshToken:refreshToken}})
        if (!userData || !tokenFromDb){
            res.status(404).json({message:"UserNotFound"})
            return;
        }

        const user = await User.findOne({where:{id:userData.id}})
        const JWTtokens = await ServiceToken.generateToken({id:user.dataValues.id,login:user.dataValues.login})
        await ServiceToken.saveToken(user.dataValues.id,JWTtokens.refreshToken)

        res.cookie('refreshToken',JWTtokens.refreshToken,{httpOnly:true,maxAge: 864000000})
        res.status(200).json({message: 'refreshOk'})
    } catch (e) {
        res.status(500).json({message: 'Ошибка обновления', error: `${e}`})
    }
}

module.exports.logout = async function logout(req,res){
    const {refreshToken} = req.cookies
    if (!await Token.findOne({where:{refreshToken:refreshToken}})){
        res.status(404).json({
            message:"User not found"
        })
        return;
    }
    const token = await ServiceToken.logout(refreshToken)
    await res.clearCookie('refreshToken')
    res.status(200).json({
        message:"userLogout"
    })
}


