const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
  title: String,
  username: Number,
  password: Number,
  email: String,
  subscriptionType: Number,
  subscriptionActive:Boolean,
});


const Company = mongoose.model('Company', companySchema);

module.exports = Company;
