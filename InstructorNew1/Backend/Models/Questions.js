const mongoose = require('mongoose');

const Questions = new mongoose.Schema({
    questionArr:[]
})

module.exports = Questions;