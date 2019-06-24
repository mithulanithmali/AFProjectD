const express=require('express');
const app=express();
const cors=require('cors');
const path=require("path");
const bodyParser=require('body-parser');
//dependencies




//DB connection steps
const mongoose=require('mongoose');
require("dotenv").config();

//this url get from mlab
mongoose.connect('mongodb://admin:admin123@ds239797.mlab.com:39797/admin1',{ useNewUrlParser: true },(err)=>{
    if(!err){
        console.log('db connected')
    }else{
        console.log('error in db')
    }
});



mongoose.Promise = global.Promise;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors({credentials: true, origin:'http://localhost:3000'}));
app.use(express.static(path.join(__dirname, "client", "build")))




//make connection with api.js`s routes
app.use('/api',require('./routes/api'));


//hosting steps(using localhost):hosting port is 4000
const port = process.env.port||4000;
app.listen(port,function(){
    console.log('now listening for request');
});