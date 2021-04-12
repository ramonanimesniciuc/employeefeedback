const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
  title: String,
  username: String,
  password: String,
  email: String,
  subscriptionType: Number,
  subscriptionActive:Boolean,
});


const Company = mongoose.model('Company', companySchema);

module.exports = Company;
