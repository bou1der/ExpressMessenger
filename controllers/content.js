const Users = require('../models/user')
const Chats = require('../models/chats')
const Messages = require('../models/messages-model')
const {QueryTypes, Sequelize, Op} = require('sequelize')
// const User = require("../client/src/components/messeges/userInMessageList");

module.exports.getChats = async function getChats(req,res){
    const arr = [];
    const chat = await Chats.findAll({
        where: Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.usersId')), '${req.user.id}')`),
        raw:true
    }).then(async (data) =>{
        let name= '';
        data.map((el)=>{
            const usersid = JSON.parse(el.users).usersId.slice(1,-1).split(",").map((id) =>{return Number(id)})
            arr.push({chatid:el.chatid,nickname:name,usersid,isGroup: el.isGroup})
        })
        let i = 0;

        // Переделать findAll
        for (i;i < arr.length; i++){
            if (!arr[i].isGroup){
                const otherid = arr[i].usersid.filter(el => el != req.user.id)
                await Users.findOne({where:{id:otherid}}).then(userWith => {arr[i].nickname = userWith.dataValues.nickname})
            }else{
                arr[i].nickname = "Anonymous group"
            }
        }
        //
    });
    if (!arr.length){
        res.status(404).json({chats:"none"})
        return
    }
    res.status(200).json([arr,req.user.id])
}
module.exports.getMessages = async (req,res)=>{
    const {chatId} = req.body
    const ChatMessages = await Messages.findAll({where:{chatId}})
    const messages = ChatMessages.map(mess =>{
        return({
            id:mess.dataValues.messageId,
            chatid:mess.dataValues.chatId,
            text:mess.dataValues.text,
            from:mess.dataValues.fromUser,
            sendTime:mess.dataValues.sendTime
        })
    })
    res.status(200).json(messages)

}