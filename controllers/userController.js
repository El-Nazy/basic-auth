var { signupUser, signinUser } = require('../services/userServices');

// var 

module.exports = function userContoller() {
    this.signupUser = (req, res) => {
        signupUser(req.body).then(result => {
            res.status(201);
            res.send({
                success: true,
                message: "user created", data: null
            });
        }).catch(error => {
            res.status(401);
            res.send({
                success: false,
                message: "could not create user", data: error
            });
        });
    }

    this.signinUser = (req, res) => {
        signinUser(req.body, userData => {
            if (userData.email)
                res.send({
                    success: true,
                    message: "user signined in",
                    userData
                });
            else {
                res.status(401);
                res.send({
                    success: false,
                    message: "invalid username or password"
                });
            }
        });
    }
}