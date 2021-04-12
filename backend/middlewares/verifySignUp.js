const Company = require('../models/company.model');
checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
 
    Company.findOne({username: req.body.username
    }).then(company => {
        if (company && company.length > 0) {
            console.log('company',company);
            res.status(400).send({
                message: "Failed! Username is already in use!"
            });
            return;
        }

        // Email
        Company.find({
                email: req.body.email
        }).then(company => {
            if (company && company.length > 0) {
                console.log('company',company);
                res.status(400).send({
                    message: "Failed! Email is already in use!"
                });
                return;
            }

            next();
        });
    });
};



const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp
