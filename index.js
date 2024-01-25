const conf = require('./config.json');
const app = require('./server');
require('dotenv').config();


const port = (process.env.PORT || conf[0].port) || 8000;
app.listen(port, () => {console.log(`${port}:Server has been deployment...`)});