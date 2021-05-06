const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var Manager = require('../models/manager.model');

exports.addManager = (req,res)=>{
  const managers = new Manager({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    createdAt: req.body.createdAt,
    departmentName: req.body.department,
    access:req.body.access,
    companyId: req.body.companyId
});
managers.save().then((success)=>{
  res.status(200).send({success:true});
}).catch((err)=>{
  res.status(500).send({success:false,message:err})
})
}