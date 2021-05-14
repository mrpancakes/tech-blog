const router = require('express').Router();
const { Article, Comment } = require('../../models');
const auth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newArticle = await Article.create({
      title: req.body.title,
      content: req.body.body,
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
      body: req.body.comment,
      user_id: req.session.user_id,
      article_id: req.params.id
    });

    res.status(200).json(newComment);
    console.log(newComment);
    
  } catch (err) {
    res.status(400).json(err)
  }
})


// Need a Put Route

router.put('/:id', auth, async (req, res) => {
  try {
    const articleData = await Article.update({
      title: req.body.title,
      content: req.body.content,
    },{
      where: { id: req.params.id }
    });

    if(!articleData){
      res.status(500).json(articleData);
    }
    
    res.status(200).json(articleData);
    
  } catch (error) {
    res.status(404).json(error);
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

    if (!articleData) {
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
