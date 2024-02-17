class User{
    ws;
    constructor(){
    }

    connectSock (){
        this.ws = new WebSocket("ws://localhost:8080")
        console.log(this.ws)
    }
    async closeSock (){
        this.ws.close()
    }
}

export default new User()