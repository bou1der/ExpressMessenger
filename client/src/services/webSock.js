import socketIo from "socket.io-client"
class User{
    ws;
    constructor(){
    }

    connectSock (){
        this.ws = socketIo.connect("http://localhost:8000")
        this.ws.onmessage = (mess) =>{
            console.log(mess)
        }
        console.log(this.ws)
    }
    sendMessage
    closeSock (){
        this.ws.emit('disconnect',console.log("?"))
    }
}

export default new User()