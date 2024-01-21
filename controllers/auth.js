
const hashing = require('bcryptjs');
const User = require('../models/user');
const Token = require("../models/token-model");

module.exports.login = async function register (req,res){
    res.status('200').json({
        test:'login'
    })
}

module.exports.register = async function register (req,res){
    try{
        
        const {loginRegister,passwordRegister,nicknameRegister} = req.body
        const hashpass = await hashing.hashSync(passwordRegister, 15);
        
        const test = await User.findOne({where:{login:loginRegister},})
        if(test){
            res.status(401).json({
                error:"Данный пользователь уже существует",
            })
        }else{

                const newUser = await User.create({nickname:nicknameRegister, login:loginRegister, password:hashpass});
                CreateToken(newUser.dataValues.id)
                console.log(newUser.dataValues.id)
                res.status(201).json({
                    login:true,
                    key:"тут будет когда то ключ?",
                })
        }
    }catch(error){
        res.status(500).json({messege:'Ошибка регистрации',error:`${error}`,test:`${req.body}`})
    }
    
}
async function CreateToken(id,token) {

    try{
        const token = await Token.create({id:id,refreshToken: "dfskljfskdjfksld"})
    }catch (err) {
        console.log(err)
    }
}
