const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

const managerSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  companyId: String,
  departmentId: Number,
  access: String,
  email:String
});

managerSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

managerSchema.methods.validPassword = function(password) {
  console.log('is valid pass',bcrypt.compareSync(password, this.password))
  return bcrypt.compareSync(password, this.password);
};
const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
