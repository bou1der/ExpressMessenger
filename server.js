const express = require('express');
const auht = require('./routers/auth');
const content = require('./routers/content')
const cookieParser = require('cookie-parser')

const cors = require('cors')
const WebSock = require('./webSocketServer/webSocket')

const authMiddleware = require('./middlewares/authMiddleware')

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials:true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
}))



 
app.use(cookieParser())
app.use('/api/auth', auht)
app.use('/api/content',authMiddleware.checkAuth, content)

module.exports = app;