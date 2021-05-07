const { Article } = require('../models');

const articleData = [
    {
        title: "Should you put HTML as a 'language' on your resume?",
        content: "So you're applying for your first dev job, and are struggling with filling out the languages you know. We've all been there. People often say HTML is a language, but it is not! It's actually just Markup. I recommend NOT putting HTML as a 'language' you know on your resume :).",
        user_id: 1
    },
    {
        title: "Why You Should Learn JavaScript",
        content: "JavScript is extremely versatile and used throughout many platforms, such as Node, Angular, and React. Learning it will help you utitlize these tools, among many others.",
        user_id: 2
    }
]

const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle;

