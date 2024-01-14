const Sequelize = require('sequelize');

const conf = require('../config.json');

const SequelizeConnect = new Sequelize(`${conf[1].database}`,`${conf[1].user}`,`${conf[1].password}`,{
    host:`${conf[1].host}`,
    dialect:'mysql',
});

module.exports = SequelizeConnect;