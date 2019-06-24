const mongoose = require('../../Database/dbconfig');

const ExamSchema = mongoose.Schema({
    Name:{
        type: String,
        required:true
    },
    EnrollmentKey:{
        type:String,
        required:true
    },
    SubmissionDate:{
        type:Date,
        default:Date.now
    },
    Duration:{
        type: Number,
        required:true
    },
    Module:{
        type: String,
        required:true
    },
    question :{
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Exam',ExamSchema);