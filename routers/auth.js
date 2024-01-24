const express = require('express');
const router = express.Router();
const controllerAuth = require('../controllers/auth');
const jsonParser = express.json();

const {check,validationResult} = require('express-validator');


router.post('/login', jsonParser, (req,res) => {
    controllerAuth.login(req,res);
})

router.post('/register',jsonParser
    ,[
    check("loginRegister",'Minimum of 2 characters for login').isLength({min:2}),
    check("passwordRegister",'Minimum of 8 characters for password').isLength({min:8}),
    check("nicknameRegister", 'Nickname cannot be empty')
],
    async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(req.body)
        console.log('afterValid')
        return res.status(400).json({
            "validationError":errors.array(),
        })
    }else{
        controllerAuth.register(req,res);
    }
})

router.get('/refreshToken', jsonParser ,(req,res) =>{

})

module.exports = router;