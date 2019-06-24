const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const allRoutes = express.Router();
const PORT = 3000;
const nodemailer = require('nodemailer')
let Assignment1 = require('./Models/Duedate.js');
let Course = require('./Models/course.model.js');


 

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/studentInstrctor',{useNewUrlParser:true});
const connection = mongoose.connection;



connection.once('open',function(){
    console.log('Mongo database connection established successfully');

})

allRoutes.route('/:id').get(function(req,res){
    let id = req.params.id;
    Assignment1.findById(id,function(err,assignment){
        res.json(assignment);
    })
})



allRoutes.route('/update/:id').post(function(req,res){
    Assignment1.findById(req.params.id,function(err,ass){
        if(!ass)
        res.status(404).send('Details is not found');

        else{
                    ass.Name = req.body.Name;
                    ass.Description = req.body.Description;
                    ass.dueDate = req.body.dueDate;
                
                
                ass.save().then(ass=>{
                    res.json('Assignment Updated');
                })

                .catch(err=>{
                    res.status(400).send('update not possible');
                })
        }
    })
})





allRoutes.route('/').get(function(req,res){
    Assignment1.find(function(err,assignment){
        if(err){
            console.log(err);
        }else{
            res.json(assignment);
        }
    })
})

allRoutes.route('/allCourses').post(function(req,res){
    console.log("List Couses Init");
    Course.find(function(err,course){
        if(err){
            console.log(err);
        }else{
            res.json(course);
        }
    })
})

allRoutes.route('/addAssignment').post(function(req,res){
    let assignment = new Assignment1(req.body);
    assignment.save()
    .then(assignment=>{

        var notification = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"lprarangi@gmail.com",
                pass:"9977953p"
            }
        });

        var mailOption ={
            to:req.body.email,
            from:"lpraarangi@gmail.com",
            subject:"New Assignment Added",
            text:"New Assignment added Please Check and Upload befor Deadline"
        };

        notification.sendMail(mailOption,function(error,info){
            if(error){
                return res.json({success:false,msg:'message sending fail.....'})
            }else{
                return res.json({success:true,msg:"success"})
            }
        })


        res.status(200).json({'assignment':'Assignement added successfully'})
    })
    .catch(err=>{
        res.status(400).send('adding new Assignment failed');
    })
})


allRoutes.route('/add2').post(function(req,res){
    let assignment = new Assignment1({
        Name:req.body.Name,
        Description:req.body.Description,
        dueDate:req.body.dueDate

    })

    assignment.save().then(ass=>{
        
        Course.findOne({code:req.body.course},function(err,course){
            if(err){
                res.status(500).send("Error");
            }else{
                if(!course){
                    res.status(404).send("No data found");
                }else{
                    
                    let newArray = [];
                    newArray = course.assignments;

                    newArray.push(ass);

                    course.assignments = newArray;

                    course.save().then(data=>{
                        //res.status(200).send({message:"added successfully",data:data})
                        var mailOpts, smtpTrans;

                        //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
                        smtpTrans = nodemailer.createTransport({
                            service:"gmail",
                            auth:{
                                user: "upeka32@gmail.com",
                                pass: "@Shanu96"
                            }
                        });
                    
                        var mailoutput = "<html>\n\
                                        <body>\n\
                                        <table>\n\
                                        <tr>\n\
                                        <td>Name: </td>" + req.body.Name + "<td></td>\n\
                                        </tr>\n\
                                        <tr>\n\
                                        <td>Email: </td><td>" + req.body.Name + "</td>\n\
                                        </tr>\n\
                                        <tr>\n\
                                        <td>MN: </td>" + req.body.Name + "<td></td>\n\
                                        </tr>\n\
                                        <tr>\n\
                                        <td>Messge: </td>" + req.body.Name + "<td></td>\n\
                                        </tr>\n\
                                        </table></body></html>";
                        //Mail options
                        mailOpts = {
                            to: "lprarangi@gmail.com",
                            subject: req.body.Name,
                            html: mailoutput
                        };
                        
                        smtpTrans.sendMail(mailOpts, function (error, res) {
                            if (error) {
                                console.log(error);
                                // res.send("Email could not send due to error" +error);
                                return console.log(error);
                            }
                        });
                        console.log('Message sent successfully!');
                           // res.render('contact.ejs');
                            
                        res.status(200).send({message:"added successfully",data:data});
                    })
                        .catch(err=>{
                            res.status(500).send({message:err})
                        })
                }
            }
        })
    })
});


allRoutes.route('/addCourse').post(function(req,res){
    console.log("Add Couses Init");
    const arr =[];

    const course= new Course({
        name:req.body.name,
        code:req.body.code,
        passmark:req.body.mark,
        lecturerInCharge:req.body.lec,
        assignments:arr
    })

    course.save().then(resolve=>{
        res.status(200).send({message:"Added successfully",data:resolve})
    }).catch(err=>{
        res.status(500).send({message:err})
    })
})


app.use('/sinstructors',allRoutes);
app.listen(PORT,function(){
    console.log('server running at '+ PORT);
})
