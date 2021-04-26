const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render('homepage', { comments });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;