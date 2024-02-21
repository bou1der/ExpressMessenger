const socketio = require('socket.io')
const eventsService = require('./Events/eventsService');

module.exports.WebSocketInit = WebSocketIniting = async (http) =>{
    const io = new socketio.Server(http,{
        cors:{
            allowedHeaders:true,
            origin:"http://localhost:3000"
        }
    })
    console.log("8000: WebSocket starting...");

    let clients = [];
    eventsService.onConnection(io, clients)

}
