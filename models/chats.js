const {Sequelize,DataTypes} =require('sequelize')
const SequelizeConnect = require('./Sequa_db')

const Chats = SequelizeConnect.define('chats',{
    chatid:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    users:{
        type:DataTypes.JSON
    },
    isGroup:{
        type:DataTypes.BOOLEAN
    }
})

module.exports = Chats