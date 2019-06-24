const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let DueDate = new Schema({
    
    Name:{
            type:String,
            required:true
    },
    
    Description:{
        type:String,
        required:true

    },
    dueDate :{
        type:Date,
        required:true
    },



})

module.exports=mongoose.model('DueDate',DueDate);