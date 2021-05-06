const mongoose = require('mongoose');
var Question = require('../models/question.model');

const templateSchema = new mongoose.Schema({
  title: String,
  questions: { type: Array, default: [] },
  managerId: String
});


const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
