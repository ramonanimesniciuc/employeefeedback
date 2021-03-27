const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
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

isUser = (req, res, next) => {
    db.users.find({ id: req.userId }, function (err, user) {
        if (user.role === 'user') {
            return;
        }
        res.status(403).send({
            message: "Require User Role!"
        });
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
    isUser: isUser,
    isDesigner: isDesigner,
    isAdmin: this.isAdmin
};
module.exports = authJwt;
