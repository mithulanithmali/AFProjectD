const express = require('express');
const router = express.Router();

const AuthorizationAdminInstructor = require('../../Auth/AdminInstructor.auth.middleware');
const AuthorizationAdminInstructorStudent = require('../../Auth/AdminInstructorStudent.auth.middleware');

const Assignment = require('./AssignmentModel');
const Module = require('../Module/ModuleModel');
const Student = require('../Student/StudentModel');

module.exports = router;