const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var User = require('../models/user.model');
const Company = require ('../models/company.model');
const Manager = require('../models/manager.model');

exports.signup = (req, res) => {
    // Save User to Database
    const user = new User({
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
  })
    user.save().then((success)=>{
      res.status(200).send({success:true});
    }).catch((err)=>{
      res.status(500).send({success:false,message:err})
    })
};
exports.signupcompany = (req, res) => {
  // Save Company to Database
  console.log('SIGN UP COMPANY',req.body)
  const company = new Company({
    title: req.body.title,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    subscriptionType:req.body.subscriptionType,
    subscriptionActive : true
});
company.save().then((succes)=>{
  res.status(201).send({success:true})
}).catch((err)=>{
  res.status(500).send({success:false,message:err})
})
};

exports.signin = (req, res) => {
  console.log('ON SIGN IN', req.body)
  Company.findOne({email: req.body.email}, function(err, company) {
    if (!company || !company.validPassword(req.body.password)) {
      User.findOne({email:req.body.email},function(err,user){
        if(!user || !user.validPassword(req.body.password)){
         Manager.findOne({email:req.body.email},(err,manager)=>{
           console.log('manager fouind',manager);
          if(!manager || !manager.validPassword(req.body.password)){
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password or wrong email!"
          });
          }else{
            var token = jwt.sign({id: manager.id}, config.secret, {
              expiresIn: 86400 // 24 hours
          });
            res.status(200).send({
              id: manager.id,
              username: manager.name,
              email: manager.email,
              accessToken: token,
              type:'manager'
          });
          }
         })
        }else{
          var token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 86400 // 24 hours
        });
          res.status(200).send({
            id: user.id,
            username: user.name,
            email: user.email,
            accessToken: token,
            type:'user'
        });
        }
      })

    } else {

      var token = jwt.sign({id: company.id}, config.secret, {
        expiresIn: 86400 // 24 hours
    });
    if(company){
      res.status(200).send({
        id: company.id,
        username: company.title,
        email: company.email,
        accessToken: token,
        type:'company'
    });
    }
    }
  });
};

