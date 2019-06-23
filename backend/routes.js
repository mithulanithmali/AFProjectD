const express = require('./node_modules/express');
const routes = express.Router();

const InstructorRoutes = require('./Roles/Instructor/InstructorRoutes');
const ModuleRoutes = require('./Roles/Module/ModuleRoutes');
const AssignmentRoutes = require('./Roles/Assignments/AssignmentRoutes');
const ExamRoutes = require('./Roles/Exam/ExamRoutes');
const MarkRoutes = require('./Roles/Marks/MarksRoutes');
const StudentRoutes = require('./Roles/Student/StudentRoutes');
const StudentQuestion = require('./Roles/StudentQuestion/StudentQuestionRoutes');


routes.use('/instructors',InstructorRoutes);
routes.use('/modules',ModuleRoutes);
routes.use('/assignments',AssignmentRoutes);
routes.use('/exams',ExamRoutes);
routes.use('/marks',MarkRoutes);
routes.use('/students',StudentRoutes);

routes.use('/addQuestion',StudentQuestion);

module.exports = routes;
