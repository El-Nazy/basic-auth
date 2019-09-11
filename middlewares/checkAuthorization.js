var jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    let signedInUser = jwt.verify(req.headers.token, "privateKey")
    if (signedInUser.isAdmin) {
        next();
    }else{
        res.status(401).send({
            success: false,
            message: "user not authorized",
            data: null
        });
    }
}