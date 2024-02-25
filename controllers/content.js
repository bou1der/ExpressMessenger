const Users = require('../models/user')
module.exports.getChats = async function getChats(req,res){
    const AllUsers = await Users.findAll()
    const users = []
    AllUsers.map((el)=>{
        users.push(el.dataValues)
    })
    res.status(200).json([users,req.user.id])
}
module.exports.getMessages = async (req,res)=>{
    res.status(200).json([
        {message:{id:1,chatid:12,text:"test",from:"1",to:"2"}}
        ,{message:{id:2,chatid:12,text:"test2",from:"1",to:"1"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"1",to:"2"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"1",to:"2"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"1",to:"1"}}
        ,{message:{id:3,chatid:12,text:"test3",from:"2",to:"2"}}


    ])

}