const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  birthdate: Date,
  role: String,
  departmentId: Number,
  managerId:String,
  phone:String,
  enrollment: Date
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
