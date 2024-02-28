const Users = require('../models/user')
const Chats = require('../models/chats')
const {QueryTypes, Sequelize, Op} = require('sequelize')
// const User = require("../client/src/components/messeges/userInMessageList");

module.exports.getChats = async function getChats(req,res){
    const AllUsers = await Users.findAll()
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
        for (i;i < arr.length; i++){
            if (!arr[i].isGroup){
                const otherid = arr[i].usersid.filter(el => el != req.user.id)
                await Users.findOne({where:{id:otherid}}).then(userWith => {arr[i].nickname = userWith.dataValues.nickname})
            }else{
                arr[i].nickname = "Anonymous group"
            }
        }



    });
    console.log(arr)
    if (!chat){
        res.status(404).json({chats:false})
        return
    }
    const users = []
    AllUsers.map((el)=>{
        users.push(el.dataValues)
    })
    res.status(200).json([users,req.user.id])
}
module.exports.getMessages = async (req,res)=>{

    res.status(200).json([
        {message:{id:1,chatid:12,text:"test",from:"3",to:"1"}}
        ,{message:{id:2,chatid:12,text:"test2",from:"3",to:"1"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"3",to:"1"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"3",to:"1"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"1",to:"1"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"2",to:"2"}}
    ])

}