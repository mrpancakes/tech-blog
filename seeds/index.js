const sequelize = require('../config/connection');
const seedArticle = require('./articleData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedArticle();

    process.exit(0);
}

seedAll();