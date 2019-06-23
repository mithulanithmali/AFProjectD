const express = require('express');
const router = express.Router();

const Module = require('./ModuleModel');

router.get('/', (req, res) => {
    Module.find().then((modules) => {
        if (modules.length === 0) {
            res.status(500).send('No data in database');
        } else {
            res.status(200).send(modules);
        }
    }).catch((err)=>{
        res.status(500).send('Error: '+err);
    })
});



router.get('/:id', (req, res) => {
    let id = req.params.id;
    Module.findById(id).then((module) => {
        if (module.length === 0) {
            res.status(500).send('No data in database');
        } else {
            res.status(200).send(module);
        }
    }).catch((err)=>{
        res.status(500).send('Error: '+err);
    })
});

router.post('/', (req, res) => {
    let reqBody = req.body;
    let ModuleObj = new Module({
        Name: reqBody.Name,
        EnrollmentKey: reqBody.EnrollmentKey,
        Year: reqBody.Year,
        Semester: reqBody.Semester,
        Faculty: reqBody.Faculty,
    });

    if(reqBody.Year >= 1 && reqBody.Year <= 4){
        if(reqBody.Semester === 1 || reqBody.Semester === 2){
            ModuleObj.save().then(() => {
                res.status(200).send('Module added successfully');
            }).catch((err) => {
                res.status(500).send('Module adding failed. Error: ' + err);
            })
        }else{
            res.status(500).send('Module adding failed. Error: Semester value is invalid');
        }
    }else{
        res.status(500).send('Module adding failed. Error: Year value is invalid');
    }


});

router.put('/addAssignment/:id',(req,res)=>{
    let id = req.params.id;
    let reqBody = req.body;

    Module.findById(id).then((module)=>{
        let AssignmentArray = module.Assignments;
        if(AssignmentArray.includes(reqBody.Assignments)){
            res.status(500).send('Assignment is already assigned to Module.');
        }else{
            AssignmentArray.push(reqBody.Assignments);

            Module.findByIdAndUpdate(id,{Assignments: AssignmentArray}).then(()=>{
                res.status(200).send('Assignment added to Module successfully');
            }).catch((err)=>{
                res.status(500).send('Assignment adding failed. Error: '+err);
            })
        }
    }).catch((err)=>{
        res.status(500).send('Module not found. Error: '+err)
    })
});


module.exports = router;