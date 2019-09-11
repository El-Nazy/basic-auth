 var router = require('express').Router();
 var userController = require('../controllers/userController');
 var jwt = require("jsonwebtoken");

module.exports = function(){
   var userCtl = new userController();
    router.post("/signup", userCtl.signupUser);
    router.post("/signin", userCtl.signinUser);
    router.delete("/:id", checkAuthorization, userCtl.deleteUser);
    router.get("/", checkAuthorization, userCtl.getAllUsers)
    router.get("/:id", checkAuthorization, userCtl.getUser)
    
    // router.all("*", (req, res) => {
    //     res.sendStatus(204);
    // })
    return router;
    
}

function checkAuthorization(req, res, next) {
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