const jwt = require('jsonwebtoken')
const Token = require("../models/token-model");

module.exports.generateToken = async function generateToken(payload){
    const accessToken = jwt.sign(payload,process.env.JWT_ACCESS_SKEY,{expiresIn:'10m'})
    const refreshToken = jwt.sign(payload,process.env.JWT_REFRESH_SKEY,{expiresIn:'10d'})
    return{
        accessToken,refreshToken
    }
}
module.exports.saveToken = async function saveToken (userId, userRefreshToken){
    const existToken = await Token.findOne({where:{id:userId}})
    if (existToken){
        existToken.refreshToken = userRefreshToken;
        return existToken.save();
    }
    const CreateToken = await Token.create({id:userId,refreshToken: userRefreshToken})
    return CreateToken;
}
module.exports.logout = async function logout (refreshToken){
    const userToken = await Token.findOne({where:{refreshToken:refreshToken}})
    if (!userToken){return false;}
    const logoutUser = await userToken.update({refreshToken:''})
}