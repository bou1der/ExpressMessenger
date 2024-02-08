const tokenService = require('../services/ServiceJwtToken')

module.exports.checkAuth = async function check(req,res,next){
    try{
        const authHeader = req.headers.authorization
        if (!authHeader){
            return next( res.status(400).json({message:'Пользователь не зарегистрирован'}));
        }

        // const accessToken = authHeader.split(' ')
        // if (!accessToken){
        //     return next( res.status(400).json({message:'Пользователь не зарегистрирован'}));
        // }

        const data =  await tokenService.verifyAccessToken(authHeader)
        if (!data){
           return next( res.status(400).json({message:'Пользователь не зарегистрирован'}));
        }

        req.user = data;
        next()
    }catch (e){

        console.log(e)
        return next(res.status(400).json({error:`${e}`}))
    }
}