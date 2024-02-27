const Users = require('../models/user')
const Chats = require('../models/chats')
const {QueryTypes, Sequelize} = require('sequelize')

module.exports.getChats = async function getChats(req,res){
    const AllUsers = await Users.findAll()
    const users = []
    AllUsers.map((el)=>{
        users.push(el.dataValues)
    })
    res.status(200).json([users,req.user.id])
}
module.exports.getMessages = async (req,res)=>{
    const chat = await Chats.findOne({
        where: Sequelize.literal('JSON_CONTAINS(users, "2") IS NOT NULL'),
        raw: true,
        type: QueryTypes.SELECT
    });

    console.log(chat);

    res.status(200).json([
        {message:{id:1,chatid:12,text:"test",from:"3",to:"1"}}
        ,{message:{id:2,chatid:12,text:"test2",from:"3",to:"1"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"3",to:"1"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"3",to:"1"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"1",to:"1"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"2",to:"2"}}


    ])

}