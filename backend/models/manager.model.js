const mongoose = require('mongoose');
const managerSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  companyId: Number,
  departmentId: Number
});


const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
