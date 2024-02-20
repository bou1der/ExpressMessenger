const conf = require('./config.json');
const app = require('./server');
const http = require('http').createServer(app)
const WebSock = require('./webSocketServer/webSocket')

const socketIO = require("socket.io");
require('dotenv').config();




const port = (process.env.PORT || conf[0].port) || 8000;

WebSock.WebSocketInit(http)
http.listen(port, () => {console.log(`${port}:Server has been deployment...`)});

