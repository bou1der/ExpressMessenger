const {Sequelize,DataTypes} = require('sequelize');
const SequelizeConnect = require('./Sequa_db');

const User = SequelizeConnect.define('users',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nickname:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
});

try{
  SequelizeConnect.authenticate();
  console.log('Connected to db seccsess');
}catch(err){
  console.log(err)

}
module.exports = User;