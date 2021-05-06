const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

const companySchema = new mongoose.Schema({
  title: String,
  username: String,
  password: String,
  email: String,
  subscriptionType: Number,
  subscriptionActive:Boolean,
});

companySchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

companySchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
