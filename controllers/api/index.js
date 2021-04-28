const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');



router.use('/posts', postroutes);
router.use('/users', userroutes);

module.exports = router;