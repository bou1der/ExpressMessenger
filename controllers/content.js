const Users = require('../models/user')
module.exports.getChats = async function getChats(req,res){
    const AllUsers = await Users.findAll()
    const users = []
    AllUsers.map((el)=>{
        users.push(el.dataValues)
    })
    console.log(users)
    res.status(200).json(users)
}
