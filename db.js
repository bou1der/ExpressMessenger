const mysql = require('mysql2');
const conf = require('./config.json');

const connect_db = mysql.createConnection({
    host:`${conf[1].host}`,
    user:`${conf[1].user}`,
    database:`${conf[1].database}`,
    password:`${conf[1].password}`
});

connect_db.connect(error => {
    if(error){
        console.log(error)
    }else{
        console.log(`db connected`);
    }
});

module.exports = connect_db;