const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); //to use differenct domain name, CORS Module
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
/*
const category = require('./routes/categoryfile')
const tb_cat = require('./routes/tb_cat')
*/
const users= require('./routes/users');

//connect to database
mongoose.connect(config.database);
//on connection
mongoose.connection.on('connected',()=>{
     console.log('Connected to databse ' + config.database);
})

const app=express(config.database);


/*CORS
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
   });

   or

*/
//cors middleware
app.use(cors());
//set static folder
app.use(express.static(path.join(__dirname,'public')));
//body parser middleware


app.use(bodyParser.json());

//passoport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

/*
app.use('/cat',tb_cat);
app.use('/category', category);
*/
app.use('/users',users);
//index route
app.get('/', (req, res, next)=>{
     res.send('invalid endpoint');
});

app.get('/test', function(req,res,next){
     res.send('test');
});
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})


const ip = process.env.OPENSHIFT_NODEJS_IP || '12.0.0.01';
const port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ()=>{
     console.log('server started on port' + port);
});