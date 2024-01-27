const {Sequalize,DataTypes} = require('sequelize');
const SequalizeConnect = require('./Sequa_db');

const TokenSchema = SequalizeConnect.define('tokenUser',{
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey:true
    },
    refreshToken:{
        type:DataTypes.STRING,
        allowNull:true,
    }
})


module.exports = TokenSchema;