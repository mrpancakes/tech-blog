const Article = require('./Article');
const User = require('./User');

User.hasMany(Article, {
    foreignKey: 'user_id'
});

module.exports = { User, Article }