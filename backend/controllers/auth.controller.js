const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var User = require('../models/user.model');


exports.signup = (req, res) => {
    // Save User to Database
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

};


exports.signin = (req, res) => {
  console.log('ON SIGN IN', req.body)
  User.findOne({username: req.body.username}, function(err, user) {

    if (!user.validPassword(req.body.password)) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
    });
    } else {

      var token = jwt.sign({id: user.id}, config.secret, {
        expiresIn: 86400 // 24 hours
    });
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      accessToken: token,
  });
    }
  });
};

