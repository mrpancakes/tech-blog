const { User } = require('../models');

const userData = [
    {
        username: 'scott',
        email: 'scott@gmail.com',
        password: 'password'
    },
    {
        username: 'DevDude',
        email: 'dude@gmail.com',
        password: 'password1'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

