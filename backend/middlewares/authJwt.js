const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
var Manager = require('../models/manager.model');

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

isManager = (req, res, next) => {
    Manager.findOne({email:req.body.email},(err,manager)=>{
        if (manager) {
            console.log('is manager')
            next();
        }else{
            res.status(403).send({
                message: "Require Manager Role!"
            });
        }
    });
};

isDesigner = (req, res, next) => {
    db.users.find({ id: req.userId }, function (err, user) {
        if (user.role === 'designer') {
            return;
        }
        res.status(403).send({
            message: "Require Designer Role!"
        });
    });
};

isAdmin = (req, res, next) => {
    db.users.find({ id: req.userId }, function (err, user) {
        if (user.role === 'admin') {
            return;
        }
        res.status(403).send({
            message: "Require Admin Role!"
        });
    });
};



const authJwt = {
    verifyToken: verifyToken,
    isManager: isManager,
    isDesigner: isDesigner,
    isAdmin: this.isAdmin
};
module.exports = authJwt;
