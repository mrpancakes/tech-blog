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
            ],
        });

        const articles = dbArticleData.map(article => article.get({ plain: true }));

        res.render('homepage', { 
            articles,
            loggedIn: req.session.loggedIn
        });

        // res.status(200).json(dbArticleData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/article/:id', async (req, res) => {

});

router.get('/login', async (req, res) => {

});

router.get('/signup', async (req, res) => {

});

module.exports = router;