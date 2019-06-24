const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    lecturerInCharge:{
        type:String,
        required:true
    },
    passmark:{
        type:Number,
        required:true
    },
    assignments:{
        type:Array
    }
})

module.exports = mongoose.model('x`Course',Course);
