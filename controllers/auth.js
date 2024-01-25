const hashing = require('bcryptjs');
const User = require('../models/user');
const ServiceToken = require('../services/ServiceJwtToken')
const {cookie} = require("express-validator");

module.exports.login = async function register (req,res){
    res.status('200').json({
        test:'login'
    })
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
        res.cookie('refreshToken', JWTtokens.refreshToken,{maxAge: 864000000} )
        res.status(201).json({
            login:true
        })
        return;
    }catch(error){
        res.status(500).json({message:'Ошибка регистрации',error:`${error}`,test:`${req.body}`})
    }
    
}
module.exports.refreshToken = async function refresh(req,res){
    try {

    }catch(e)
    {
        res.status(500).json({message:'Ошибка обновления',error:`${e}`})
    }
}


