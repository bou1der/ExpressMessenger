import socketIo from "socket.io-client"
class User{
    ws;
    constructor(){
    }

    connectSock (){
        this.ws = socketIo.connect("http://localhost:8000")
        console.log(this.ws)
    }
    messageEventSocket(messages,setMessages){
        this.ws.on('message',(mess) =>{
            console.log(mess)
            console.log(messages)
            setMessages([...messages,mess])
        })
    }
    closeSock (){
        this.ws.emit('end',console.log("Close connection with WebSocket"))
    }
}

export default new User() 