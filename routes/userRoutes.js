 var router = require('express').Router();
 var userController = require('../controllers/userController');

module.exports = function(){
   var userCtl = new userController();
    router.post('/signup', userCtl.signupUser);
    router.post("/signin", userCtl.signinUser);
    return router;
    
}