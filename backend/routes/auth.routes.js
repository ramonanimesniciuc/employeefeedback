const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmailForCompany,
        ],
        controller.signup
    );
    app.post(
        "/api/auth/signupcompany",
        [
            verifySignUp.checkDuplicateUsernameOrEmailForCompany,
        ],
        controller.signupcompany
    );
    app.post("/api/auth/signin",controller.signin);};
