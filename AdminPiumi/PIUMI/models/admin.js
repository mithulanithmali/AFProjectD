const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Admin = new schema({
    firstname:{
        type:String,
        require:[true,'first Name field is required']
    },
    lastname:{
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
    }
});


const Admindetails = mongoose.model('admin',Admin);//'details' is mongodb name Details is the schema name;
module.exports=Admindetails;