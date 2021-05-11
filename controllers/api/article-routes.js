const router = require('express').Router();
const { Article, Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newArticle = await Article.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newArticle);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/:id/comment', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      article_id: req.params.id
    });

    res.status(200).json(newComment);
    console.log(newComment);
    
  } catch (err) {
    res.status(400).json(err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const articleData = await Article.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!artcleData) {
      res.status(404).json({ message: 'No article found with this id!' });
      return;
    }

    res.status(200).json(articleData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
