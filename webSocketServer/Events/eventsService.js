const Chats = require("../../models/chats");
const MessagesModel = require("../../models/messages-model")
const {Sequelize, where} = require("sequelize");
module.exports.onConnection = onConnection = (io, clients) =>{

    io.on('connection', (socket) =>{
        console.log("---------------Клиент подключился---------------");
        console.log(socket.id)

        clients.push(socket.id);

        socket.on('message', async (message)=>{
            try{

                console.log(message)
                const result =  await MessagesModel.create({chatId:message.chatid,text:message.text,fromUser:message.from})
                io.to(`${message.chatid}`).emit('message',message)

            }catch (e) {
                socket.emit('message',{chatid:message.chatid,text:message.text,from:message.from,error:true})
                socket.emit('error', e)
            }

        })

        socket.on('end', ()=>{
            clients = clients.filter((el) =>{
                return el !== socket.id
            })
            console.log(clients)
            socket.disconnect() 
            return;
        })
        socket.on('chats:joinRooms', async (id) =>{
            const chats = await Chats.findAll({
                where: Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.usersId')), '${id}')`),
                raw:true
            })
            console.log(chats)
            if (!chats.length){
                socket.emit('error',"Undefined chats")
                return;
            }
            chats.map(chat =>{
                socket.join(`${chat.chatid}`)
            })
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