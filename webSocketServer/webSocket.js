const socketio = require('socket.io')
const {DATE} = require("sequelize");
const eventsService = require('./Events/eventsService');


// const WebSocServ = socketio. (8080,{ }, () => {
//     console.log("8080: WebSocket starting...");
// });

// const clients = new Map()
// WebSocServ.on('connection', (ws) => {
//     eventsService.connection(ws);
//     console.log(ws._socket.remoteAddress)
//     clients.set(ws._socket.remoteAddress, ws);
//
//     ws.on('message', (message) => {
//         console.log("Received message: ", message.toString());
//
//     });
//
//     ws.on('close', () => {
//         console.log("---------------Клиент отключился---------------");
//         clients.delete(ws._socket.remoteAddress);
//     });
//
// });
module.exports.WebSocketInit = WebSocketIniting = (http) =>{
    const io = new socketio.Server(http,{
        cors:{
            allowedHeaders:true,
            origin:"http://localhost:3000"
        }
    })
    console.log("8000: WebSocket starting...");

    const clients = new Map();

    io.on('connection', (socket) =>{
        console.log("---------------------Клиент подключился---------------------")
        // eventsService.connection(io);
        // console.log(ws._socket.remoteAddress)
        // clients.set(ws._socket.remoteAddress, ws);
        socket.on('message', (message)=>{

        })
        socket.on('disconnect', (socket) =>{
            console.log("---------------Клиент отключился---------------");
            console.log(socket)
        })
    })

}
