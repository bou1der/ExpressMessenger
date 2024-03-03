module.exports.onConnection = onConnection = (io, clients) =>{

    io.on('connection', (socket) =>{
        console.log("---------------Клиент подключился---------------");
        console.log(socket.id)

        clients.push(socket.id);

        socket.on('message', (message)=>{
            // socket.send('message')
            console.log(message)
            // io.to(socket.id).emit('message',"this is test")
            io.emit("message",message)
        })

        socket.on('end', ()=>{
            clients = clients.filter((el) =>{
                return el !== socket.id
            })
            console.log(clients)
            socket.disconnect() 
            return;
        })
        // io.sockets.socket(socket).emit('message', 'test')
        socket.on('disconnect', () =>{
            console.log("---------------Клиент отключился---------------");
            console.log(socket.id)
            clients = clients.filter(el =>{
                return el !== socket.id 
            })
            console.log(clients)
        })
    })
}