var router = require('express').Router();
var userController = require('../controllers/userController');
var checkAuthorization = require('../middlewares/checkAuthorization');

module.exports = function(){
  var userCtl = new userController();
   router.get("/", checkAuthorization, userCtl.getAllUsers)
   
   // router.all("*", (req, res) => {
   //     res.sendStatus(204);
   // })
   return router;  
}