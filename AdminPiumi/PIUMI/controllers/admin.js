const express= require('express');
//call for customer module
const Admin = require('../models/Admin');
var nodemailer = require('nodemailer');

const bcrypt = require('bcrypt');

//login admin

module.exports.log = (req, res, next) => {
  Admin.findOne({
    email: req.body.email
  }, function (err, admin) {
    if (!admin) {
      res.status(401).send({ success: false, msg: '-Authentication failed.User not found.-' });
    } else {
      if (bcrypt.compareSync(req.body.pwd, admin.pwd)) {
       
        
        res.json({ success:true,firstname: admin.firstname,lastname:admin.lastname });
      } else {
        res.status(401).send({ success: false, msg: '-Authentication failed. wrong password-.' });
      }
    }
  });
}
// register new admin

module.exports.adminreg=(req,res,next)=>{
   
    
    Admin.findOne({
                email:req.body.email
            }).then(function(data){
                if(data){
                    return res.json({success:false,msg:'email already taken'})
                }
                        {

                            var salt = bcrypt.genSaltSync(10);
                            var hash = bcrypt.hashSync(req.body.pwd, salt);
                            var admin = new Admin({
                                firstname: req.body.firstname,
                                lastname: req.body.lastname,
                                email:req.body.email,
                                nic:req.body.nic,
                                tp:req.body.tp,
                                pwd:hash
                                 
                            });
                            admin.save((err,doc)=>{
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

//registration confirmation msg
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
     
  
  //view all admins details
module.exports.viewalla=(req,res,next)=>{
    
  Admin.find().then(function(details){
       res.send(details);
   });
  

  }
            
             
         
  
 