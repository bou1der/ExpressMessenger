const express = require('express');
const auht = require('./routers/auth');
const webView = require('./routers/web');
const User = require('./models/user')
const Token = require('./models/token-model')



const app = express();

app.use(require('cors')())

app.use('/api/auth', auht)

app.use('/', webView)

module.exports = app;