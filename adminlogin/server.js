const express = require('express');

const cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended : false
    })
)
const mongoURI = 'mongodb://localhost:27017/studentLogin'


mongoose
    .connect(mongoURI , {useNewUrlParser : true})
    .then(() => console.log("mongodb connected"))
    .catch(err => console.log(err))

var Users = require('./routes/User')

app.use('/users' , Users)

app.listen(5000 , () => console.log("Server is  Started ......."));