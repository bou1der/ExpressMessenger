const tokenService = require('../services/ServiceJwtToken')

module.exports.checkAuth = async function check(req,res,next){
    try{
        const authHeader = req.headers.authorization
        if (!authHeader){
            return next( res.status(403).json({message:'Пользователь не зарегистрирован'}));
        }
        const accessToken = authHeader.split(' ')
        if (!accessToken[1] || accessToken[1] === 'null'){
            return next( res.status(402).json({message:'Пользователь не зарегистрирован'}));
        }
        const data =  await tokenService.verifyAccessToken(accessToken[1])
        if (!data){
           return next( res.status(405).json({message:'Пользователь не зарегистрирован'}));
        }

        req.user = data;
        next()
    }catch (e){

        console.log(e)
        return next(res.status(500).json({error:`${e}`}))
    }
}