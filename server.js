const express = require('express');
const auht = require('./routers/auth');
const User = require('./models/user')
class UserClass {
    id;
    login;
    isActivated;
    constructor(model) {
        this.id = model.id;
        this.login = model.login;
        this.isActivated = model.isActivated;
    }
}
const existUser = User.findOne({where:{login:'boulder'},})
console.log(existUser)
const newUser = new UserClass(existUser)
console.log(newUser)


const app = express();

app.use(require('cors')())

app.use('/api/auth', auht)

module.exports = app;