const {Sequelize,DataTypes} =require('sequelize')
const SequelizeConnect = require('./Sequa_db')

const Chats = SequelizeConnect.define('chats',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    users:{
        type:DataTypes.JSON
    }
})

module.exports = Chats