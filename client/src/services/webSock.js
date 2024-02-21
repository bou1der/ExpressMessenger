import socketIo from "socket.io-client"
class User{
    ws;
    constructor(){
    }

    connectSock (){
        this.ws = socketIo.connect("http://localhost:8000")
        this.ws.on('message',(mess) =>{
            console.log(mess)
        })
        console.log(this.ws)
    }
    closeSock (){
        this.ws.emit('end',console.log("Close connection with WebSocket"))
    }
}

export default new User() 