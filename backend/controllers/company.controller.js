const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var Manager = require('../models/manager.model');

exports.addManager = (req,res)=>{
  db.users.save({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    phone: req.body.phone,
    name:req.body.name,
    birthdate: req.body.birthdate,
    createdAt: req.body.createdAt,
    departmentId: req.body.departmentId,
    role: req.body.role,
    managerId: req.body.managerId
},function(err,success){
  res.status(200).send({
    message:'User added!'
  })
})
}