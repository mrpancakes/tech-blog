const { Comment } = require('../models');

const commentData = [
    {
        body: "Great to know!",
        user_id: 2,
        article_id: 1
    },
    {
        body: "I'm learning JS right now, actually!",
        user_id: 1,
        article_id: 2
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

