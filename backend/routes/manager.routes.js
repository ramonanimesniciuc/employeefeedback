

const { authJwt, verifySignUp } = require("../middlewares");
const controller = require("../controllers/manager.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/manager/add-template",
        [
            authJwt.isManager,
        ],
        controller.addTemplate
    );

    app.post("/api/manager/add-employees",[authJwt.isManager,verifySignUp.checkDuplicateEmailForUsers],controller.addEmployees)
    }
