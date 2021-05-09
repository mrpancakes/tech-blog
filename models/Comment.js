const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Article extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          body: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
          },
          article_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'article',
                key: 'id',
            },
          },
          
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',
    }
);

module.exports = Comment;