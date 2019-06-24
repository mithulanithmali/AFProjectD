const express= require('express');
//call for customer module
const Courses = require('../models/Courses');


// register new Course

module.exports.couresreg=(req,res,next)=>{
    
    Courses.findOne({
                code:req.body.code
            }).then(function(data){
                if(data){
                    return res.json({success:false,msg:'code already taken'})
                }
                        {
                            var courses = new Courses({
                                cname: req.body.cname,
                                code:req.body.code,
                                department:req.body.department,
                                
                                 
                            });
                            courses.save((err,doc)=>{
                                if(!err){
                                   return res.json({success:true ,msg:'successfully inserted'});
                                }
                                else{
                                   return res.json({success:false,msg:'error!'});
                                }
                            });
                        }
                    });
                }



 
        




//view all coures details
module.exports.viewallc=(req,res,next)=>{
    
    Courses.find().then(function(details){
         res.send(details);
     });
    
  
    }
       
            
             
         
  
 