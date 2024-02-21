module.exports.onConnection = onConnection = (io, clients) =>{

    io.on('connection', (socket) =>{
        console.log("---------------Клиент подключился---------------");
        console.log(socket.id)

        clients.push(socket.id);

        socket.on('message', (message)=>{
            console.log(message)
            socket.send('message')
            io.to(socket.id).emit('message',"this is test")
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
            
            clients = clients.filter(el =>{
                return el !== socket.id 
            })
            console.log(clients)
        })
    })
}