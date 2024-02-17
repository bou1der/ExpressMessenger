const webSocket = require('ws');
const { Server } = require('ws');
const eventsService = require('./Events/eventsService');

const WebSocServ = new Server({ port: 8080 }, () => {
    console.log("8080: WebSocket starting...");
});

const clients = new Map()
WebSocServ.on('connection', (ws) => {
    eventsService.connection(ws);
    clients.set(ws._socket.remoteAddress, ws);

    ws.on('message', (message) => {
        console.log("Received message: ", message);
    });

    ws.on('close', () => {
        console.log("---------------Клиент отключился---------------");
        clients.delete(ws._socket.remoteAddress);
    });

});

module.exports = WebSocServ;
