var router = require('express').Router();
var userController = require('../controllers/userController');
var checkAuthorization = require('../middlewares/checkAuthorization');

module.exports = function(){
   var userCtl = new userController();
    router.post("/signup", userCtl.signupUser);
    router.post("/signin", userCtl.signinUser);
    router.delete("/:id", checkAuthorization, userCtl.deleteUser);
    router.get("/:id", checkAuthorization, userCtl.getUser)
    
    // router.all("*", (req, res) => {
    //     res.sendStatus(204);
    // })
    return router;   
}