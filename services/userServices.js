const bcrypt = require('bcrypt');
var userModel = require('../models/users');
var jwt = require("jsonwebtoken");

var signupUser = function (userData) {
    var newUser = new userModel(
        { 
            firstName: userData.firstname ,
            lastName : userData.lastname,
            email : userData.email,
            password: bcrypt.hashSync(userData.password, 8),
            phone : userData.phone
        }
    );
    return newUser.save();
}

async function signinUser (userData, callback) {
    // Logic for user authentication
    let userDetails;
    await userModel.findOneAndUpdate({email: userData.email},
        {token: jwt.sign({email: userData.email}, "privateKey")});

    document = await userModel.findOne({email: userData.email});

    userObject = document.toObject();
    if (bcrypt.compareSync(userData.password, userObject.password)) {
        delete userObject._id;
        delete userObject.password;
        delete userObject.__v;

        userDetails = userObject;
    }
    console.log(userDetails);
    callback(userDetails);
}

module.exports.signupUser = signupUser;
module.exports.signinUser = signinUser;