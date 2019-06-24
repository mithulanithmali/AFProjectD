const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Instructor = new schema({
    firstname:{
        type:String,
        require:[true,'first Name field is required']
    },
    lastname:{
        type:String,
        require:[true,'last Name field is required']
    },
    department:{
        type:String,
        require:[true,'last Name field is required']
    },
    email:{
        type:String,
        unique:false,
    },
    nic:{
        type:String,
        require:[true,'Id field is require']
    },
    tp:{
        type:String,
        require:[true,'email field is required']
    },
    
    pwd:{
        type:String,
        require:[true,'Id field is require']
    },
    crs1:{
        type:String,
        require:[true,'Id field is require']
    },
    crs2:{
        type:String,
        require:[true,'Id field is require']
    },
    crs3:{
        type:String,
        require:[true,'Id field is require']
    },
});


const Instructordetails = mongoose.model('instructor',Instructor);//'details' is mongodb name Details is the schema name;
module.exports=Instructordetails;