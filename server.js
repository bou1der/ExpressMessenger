const express = require('express');
const auht = require('./routers/auth');
const content = require('./routers/content')
const cookieParser = require('cookie-parser')
const app = express();

const authMiddleware = require('./middlewares/authMiddleware')

app.use(require('cors')())
app.use(cookieParser())

app.use('/api/auth', auht)
app.use('/api/content',authMiddleware.checkAuth, content)

module.exports = app;