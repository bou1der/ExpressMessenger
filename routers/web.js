const express = require('express');
const router = express.Router();
const controllerWeb = require('../controllers/web');

router.get('/signup', (res,req) => {
    controllerWeb.signPage(res,req);
})

module.exports = router;