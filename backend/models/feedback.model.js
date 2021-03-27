const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
  title: String,
  userId: Number,
  managerId: Number,
  description: String,
  createdAt: Date,
  questions:Array,
  comment:String,
});


const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
