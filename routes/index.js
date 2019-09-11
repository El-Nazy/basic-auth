var userRoutes = require('./userRoutes');
var usersRoutes = require('./usersRoutes');

module.exports = function (router) {
    router.use('/user', userRoutes());
    router.use('/users', usersRoutes());
    return router;
}