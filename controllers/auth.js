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
        res.cookie('refreshToken',JWTtokens.refreshToken,{httpOnly:true,maxAge: 864000000})
        res.status(200).json({
            reload:true
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
        
        const {loginRegister,passwordRegister,nicknameRegister} = req.body
        const existUser = await User.findOne({where:{login:loginRegister}})
        if(existUser){
            res.status(401).json({
                error:"Данный пользователь уже существует",
            })
            return;
        }
        const hashpass = await hashing.hashSync(passwordRegister, 15);
        const newUser = await User.create({nickname:nicknameRegister, login:loginRegister, password:hashpass});
        const JWTtokens = await ServiceToken.generateToken({id:newUser.dataValues.id, loginRegister})
        await ServiceToken.saveToken(newUser.dataValues.id,JWTtokens.refreshToken)
        res.cookie('refreshToken', JWTtokens.refreshToken,{maxAge: 864000000, httpOnly:true} )
        res.status(200).json({
            login:true
        })
        return;
    }catch(error){
        res.status(500).json({message:'Ошибка регистрации',error:`${error}`,test:`${req.body}`})
    }
    
}
module.exports.refreshToken = async function refresh(req,res) {
    try {

    } catch (e) {
        res.status(500).json({message: 'Ошибка обновления', error: `${e}`})
    }
}

module.exports.logout = async function logout(req,res){
    const {refreshToken} =req.cookies
    const token = await ServiceToken.logout(refreshToken)
    console.log(token)
    if (!token){
        res.status(400).json({
            message:"User not found"
        })
        return;
    }
    res.clearCookie()
    res.status(200).json({
        message:"userLogout"
    })
}


