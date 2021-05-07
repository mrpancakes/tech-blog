const sequelize = require('../config/connection');
const seedArticle = require('./articleData');
const seedUser = require('./userData')

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedArticle();

    process.exit(0);
}

seedAll();