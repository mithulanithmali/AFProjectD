const express = require('express');
const router = express.Router();



//call for controllers

const admin = require('../controllers/Admin');
const inst = require('../controllers/Instructor');
const cours = require('../controllers/Courses');



//admin routes
router.post('/login', admin.log);
router.post('/addadmin', admin.adminreg);
router.post('/email',admin.email1);
router.get('/getadm' , admin.viewalla);

//instructor routes
router.post('/addins' , inst.instnreg);
router.get('/getins' , inst.viewalli);


//course routes
router.post('/addcrs' , cours.couresreg);
router.get('/getcrs' , cours.viewallc);



module.exports=router;

