const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const query = express.query();

// const router = require('./componets/message/network');

const router = require('./network/routes');
const { connect } = require('./componets/message/network');

db('mongodb+srv://usuario:vzmDm8xdHkL5wIH7@cluster0.b0qya.mongodb.net/cluster0?retryWrites=true&w=majority')

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
// app.use(router);
router(app);





app.use('/app', express.static('public'));

// app.use('/', function(req,res){
//     res.send('hola')
// });
app.listen(3000);
console.log('la aplicacion esta escuchando en http://localhost:3000');
