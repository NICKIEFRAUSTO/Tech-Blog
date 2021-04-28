const router = require('express').Router();
const userRoutes = require('./userroutes');
const commentRoutes = require('./commentroutes');
const homeRoutes = require('./homeroutes');

router.use('/', homeroutes);
router.use('/comment', commentroutes);
router.use('/users', userroutes);

module.exports = router;