const bcrypt = require('bcrypt');
var userModel = require('../models/users');
var jwt = require("jsonwebtoken");

var services = {};

services.signupUser = function (userData) {
    var newUser = new userModel(
        { 
            firstName: userData.firstname ,
            lastName : userData.lastname,
            email : userData.email,
            password: userData.password,
            isAdmin: userData.isAdmin,
            phone : userData.phone
        }
    );
    return newUser.save();
}

services.signinUser = function (signinData) {
    let userDetails = {};

    return userModel.findOne({email: signinData.email})
    .then((user) => {
        userDetails = user.toObject();
        console.log(userDetails);
        if (bcrypt.compareSync(signinData.password, userDetails.password)) {
            return jwt.sign({email: signinData.email, isAdmin: userDetails.isAdmin}, "privateKey")
        }else{
            throw new Error("Incorrect password");
        }
    })
    .catch((error) => {
        throw error;
    });
}

services.deleteUser = function (id) {
    return userModel.deleteOne({_id: id})
    .catch(error => {
        throw error;
    })
}

services.getAllUsers = function() {
    return userModel.find({}).select("firstName lastName _id email")
    .then(users => {
        return users.map(userData => userData.toObject())
    })
    .catch(error => {
        throw error;
    })
}

services.getUser = function(id) {
    return userModel.findOne({_id: id})
    .then(user => {
        return user;
    })
    .catch(error => {
        throw error;
    })
}

module.exports = services;