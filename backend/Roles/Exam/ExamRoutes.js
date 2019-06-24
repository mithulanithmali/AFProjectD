const express = require('express');
const router = express.Router();
const AuthorizationExamCandidate = require('../../Auth/Exam.auth.middleware');
const AuthorizationAdminInstructor = require('../../Auth/AdminInstructor.auth.middleware');


const Exam = require('./ExamModel');


router.get('/getexams', (req, res) => {
    Exam.find().then((exams) => {
        if (exams.length === 0) {
            res.status(500).send('No data in database');
        } else {
            res.status(200).send(exams);
        }
    }).catch((err)=>{
        res.status(500).send('Error: '+err);
    })
});

router.post('/', (req, res) => {
    let reqObj = req.body;
    let ExamObj = new Exam({
        Name: reqObj.Name,
        Duration: reqObj.Duration,
        EnrollmentKey:reqObj.EnrollmentKey,
        Module: reqObj.Module,
        question : reqObj.question
    });

    ExamObj.save().then(()=>{
        res.status(200).send('Exam successfully added')
    }).catch((err)=>{
        res.status(500).send('Error fetching exams. Error: '+err);
    })
});




module.exports = router;