const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentroutes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/comment', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;