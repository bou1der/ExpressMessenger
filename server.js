const express = require('express');
const auht = require('./routers/auth');
const cookieParser = require('cookie-parser')
const app = express();

app.use(require('cors')())
app.use(cookieParser())

app.use('/api/auth', auht)

module.exports = app;