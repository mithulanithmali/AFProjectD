const express= require('express');
//call for customer module
const Instructor = require('../models/Instructor');
const bcrypt = require('bcrypt');

// register new Instructor

module.exports.instnreg=(req,res,next)=>{
    
    Instructor.findOne({
                email:req.body.email
            }).then(function(data){
                if(data){
                    return res.json({success:false,msg:'email already taken'})
                }
                        {
                            var salt = bcrypt.genSaltSync(10);
                            var hash = bcrypt.hashSync(req.body.pwd, salt);
                            var instructor = new Instructor({
                                firstname: req.body.firstname,
                                lastname: req.body.lastname,
                                department: req.body.department,
                                email:req.body.email,
                                nic:req.body.nic,
                                tp:req.body.tp,
                                pwd:hash,
                                crs1:req.body.crs1,
                                crs2:req.body.crs2,
                                crs3:req.body.crs3,

                                 
                            });
                            instructor.save((err,doc)=>{
                                if(!err){
                                   return res.json({success:true ,msg:'successfully inserted'});
                                }
                                else{

                                    module.exports.email1=(req, res,next)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "admn1moodle1234@gmail.com",
          pass: 'Abcd@123'
        }
      });
     var mailOptions = {
        to: req.body.email,
        from: "admn1moodle1234@gmail.com",
        subject: 'Your registration proceeded successfully',
        text:"Now you add to the moodle system,  Thank you."
      }; 

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          //console.log(error);
          return res.json({ success: false, msg: 'message sending fail!!' })
        } else {
          //console.log('Email sent: ' + info.response);
          return res.json({ success: true, msg: 'Succeeded' })
        }
      });
  }
     
                                   return res.json({success:false,msg:'error!'});
                                }
                            });
                        }
                    });
                }



//view all instructors details
module.exports.viewalli=(req,res,next)=>{
    
    Instructor.find().then(function(details){
         res.send(details);
     });
    
  
    }






       
            
             
         
  
 