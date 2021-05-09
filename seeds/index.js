const sequelize = require('../config/connection');
const seedArticle = require('./articleData');
const seedUser = require('./userData')
const seedComment = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedArticle();

    await seedComment();

    process.exit(0);
}

seedAll();