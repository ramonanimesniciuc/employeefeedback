const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
  title: String,
  answers:[mongoose.SchemaTypes.ObjectId]
});


const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
