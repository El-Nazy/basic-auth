var { signupUser, signinUser, deleteUser, getAllUsers, getUser } = require('../services/userServices');

// var 

module.exports = function userContoller() {
    this.signupUser = (req, res) => {
        signupUser(req.body).then(result => {
            res.status(201);
            res.send({
                success: true,
                message: "user created",
                data: null
            });
        }).catch(error => {
            res.status(401);
            res.send({
                success: false,
                message: "could not create user",
                data: error
            });
        });
    }

    this.signinUser = (req, res) => {
        signinUser(req.body).then(token => {
            res.status(200).send({
                success: true,
                message: "user signined in",
                data : {
                    token
                }
            });
        }).catch(error => {
            console.log(error);
            res.status(400).send({
                success: false,
                message: "could not signin user",
                data: error
            });
        });
    }

    this.deleteUser = (req, res) => {
        deleteUser(req.params.id).then(() => {
            res.status(200).send({
                success: true,
                message: "user deleted",
                data: null
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400).send({
                success: false,
                message: "could not delete user",
                data: error
            });
        })
    }

    this.getAllUsers = (req, res) => {
        getAllUsers().then((users) => {
            res.status(200).send({
                success: true,
                message: "users collection",
                data: users
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400).send({
                success: false,
                message: "could not get users",
                data: error
            });
        })
    }

    this.getUser = (req, res) => {
        getUser(req.params.id).then((user) => {
            res.status(200).send({
                success: true,
                message: "see user data below",
                data: user
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400).send({
                success: false,
                message: "could not get user",
                data: error
            });
        })
    }
}