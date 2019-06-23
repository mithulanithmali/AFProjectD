const mongoose = require('mongoose');

const DBName='SystemDB';

mongoose.connect('mongodb://localhost:27017/'+DBName,{useNewUrlParser:true}).then(()=>{
    console.log('Successfully connected ');
}).catch((err)=>{
   if(err){
       console.log('error : '+err);
   }
});

module.exports = mongoose;