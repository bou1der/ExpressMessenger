const express = require('express');
const auht = require('./routers/auth');
const webView = require('./routers/web');
const User = require('./models/user')

// const newUser = user.create({nickname:"test",login:"boulder",password:"1234"})


const app = express();

app.use(require('cors')())

app.use('/api/auth', auht)

app.use('/', webView)

module.exports = app;