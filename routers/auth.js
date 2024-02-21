const express = require('express');
const router = express.Router();
const controllerAuth = require('../controllers/auth');
const jsonParser = express.json();

const {check,validationResult} = require('express-validator');


router.post('/login', jsonParser,[
    check("login",'Login cannot be empty').notEmpty(),
    check("password",'Password cannot be empty').notEmpty()
], (req,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({
            message:"Error validation",
            error:errors.array()
        })
    }else {
        controllerAuth.login(req, res);
    }

})

router.post('/register',jsonParser
,
[
    check("login",'Minimum of 2 characters for login').isLength({min:2}),
    check("password",'Minimum of 8 characters for password').isLength({min:8}),
    check("nickname", 'Nickname cannot be empty')
],
    async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            validationError:errors.array(),
        })
    }else{
        controllerAuth.register(req,res);
    }
})

router.get('/refresh', jsonParser ,(req,res) =>{
    controllerAuth.refreshToken(req,res)
})

router.post('/logout', jsonParser,(req,res) =>{
    controllerAuth.logout(req,res);
})
module.exports = router;