const express = require('express')
const router = express.Router();
const controllContent = require('../controllers/content')

router.get('/getchats',(req,res) => {
    controllContent.getChats(req,res)
})

module.exports = router