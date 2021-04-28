const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./post-routes');
const homeRoutes = require('./homeroutes');

router.use('/', homeroutes);
router.use('/comment', commentroutes);
router.use('/users', userroutes);

module.exports = router;