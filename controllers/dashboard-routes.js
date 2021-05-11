const router = require('express').Router();
const { Article, User, Comment } = require('../models');

router.get('/dashboard', async (req, res) => {
    try {
        
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Article }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            user,
            loggedIn: true,
        });

        console.log(user);

    } catch (error) {
        res.status(400).json(error);
    }
})