const config = require("../config/auth.config");
const Template = require("../models/template.model");
const User = require("../models/user.model");
var bcrypt = require("bcryptjs");

exports.addTemplate = (req, res) => {
  console.log("hello template", req.body);
  const templates = new Template({
    title: req.body.title,
    questions: req.body.questions,
    managerId: req.body.managerId,
  });
  templates
    .save()
    .then((success) => {
      res.status(200).send({ success: true });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: err });
    });
};

exports.getEmployees = (req, res) => {
  User.find((users) => {
    res.status(200).send({ success: true, data: users });
  });
};

exports.getAllTemplatesAddedByManager = (req,res)=>{
  Template.find({managerId: req.body.id}).then((templates)=>{
    res.status(200).send({success:true,data:templates})
  })
}

exports.addEmployees = (req,res)=>{
  let successes = [];
  let errors = [];
 for(let i=0;i<req.body.users.length;i++){
    const templates = new User({
      name: req.body.users[i].name,
      username: req.body.users[i].name,
      password:bcrypt.hashSync(req.body.users[i].password, 8),
      birthdate: req.body.users[i].birthdate,
      role: req.body.users[i].role,
      departmentId: req.body.users[i].departmentId,
      managerId: req.body.users[i].managerId,
      phone: req.body.users[i].phone,
      enrollment: req.body.users[i].enrollment
    });
    
    templates
      .save()
      .then((success) => {
        console.log('sucess add')
        successes.push(success);
      })
      .catch((err) => {
        console.log(err)
        errors.push(err);
      });
  }

  if(errors.length > 0){
    res.status(500).send({success:false,message:'Errors found!'})
  }else{
    res.status(201).send({success:true})
  }
}
