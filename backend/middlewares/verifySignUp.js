const Company = require("../models/company.model");
const Manager = require("../models/manager.model");
const User = require('../models/user.model');
checkDuplicateUsernameOrEmailForCompany = (req, res, next) => {
  // Username

  Company.findOne({ username: req.body.username }).then((company) => {
    if (company && company.length > 0) {
      console.log("company", company);
      res.status(400).send({
        message: "Failed! Username is already in use!",
      });
      return;
    }

    // Email
    Company.find({
      email: req.body.email,
    }).then((company) => {
      if (company && company.length > 0) {
        console.log("company", company);
        res.status(400).send({
          message: "Failed! Email is already in use!",
        });
        return;
      }

      next();
    });
  });
};

checkDuplicateEmailForManager = (req, res, next) => {
  // Email
  Manager.find({
    email: req.body.email,
  }).then((manager) => {
    if (manager && manager.length > 0) {
      console.log("manager", manager);
      res.status(400).send({
        message: "Failed! Manager already registered!",
      });
      return;
    }

    next();
  });
};

checkDuplicateEmailForUsers = (req, res, next) => {
    // Email
    User.find({
      email: req.body.email,
    }).then((users) => {
      if (users && users.length > 0) {
        console.log("users", users);
        res.status(400).send({
          message: "Failed! users already registered!",
          users: users
        });
        return;
      }
  
      next();
    });
  };

const verifySignUp = {
    checkDuplicateUsernameOrEmailForCompany: checkDuplicateUsernameOrEmailForCompany,
    checkDuplicateEmailForManager: checkDuplicateEmailForManager,
    checkDuplicateEmailForUsers : checkDuplicateEmailForUsers
};

module.exports = verifySignUp;
