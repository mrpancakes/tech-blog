const router = require('express').Router();
const { Article, User, Comment } = require('../models');

// GET all articles for homepage

router.get('/', async (req, res) => {
    try {
        const dbArticleData = await Article.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                { model: Comment }
            ],
        });

        const articles = dbArticleData.map(article => article.get({ plain: true }));

        res.render('homepage', { 
            articles,
            // loggedIn: req.session.loggedIn
        });

        console.log(articles)
        console.log(articles[0].comments[0])
        // res.status(200).json(dbArticleData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/article/:id', async (req, res) => {
    try {

        
        
    } catch (error) {
        
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        console.log(req.session.loggedIn);
        return;
      }
      // Otherwise, render the 'login' template
      res.render('login');
});

router.get('/signup', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

module.exports = router;