const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Courses = new schema({
    cname:{
        type:String,
        require:[true,'first Name field is required']
    },

    code:{
        type:String,
        require:[true,'email field is required']
    },
    
    department:{
        type:String,
        require:[true,'email field is required']
    },
    
});


const Coursesdetails = mongoose.model('course',Courses);//'details' is mongodb name Details is the schema name;
module.exports=Coursesdetails;