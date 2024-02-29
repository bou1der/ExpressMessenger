const {Sequelize,DataTypes} = require('sequelize')
const SequelizeConnect = require('./Sequa_db')

const messages = SequelizeConnect.define('messages',{
    messageId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    chatId:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    text:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    sendTime:{
        type:DataTypes.TIME,
        currentTime:true
    },
    fromUser:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    toUser:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})

module.exports = messages;