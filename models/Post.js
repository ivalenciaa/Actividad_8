const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Autor = require('./Autor');

const Post = sequelize.define('post', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  categoria: {
    type: DataTypes.STRING
  }
});

Post.belongsTo(Autor, { foreignKey: 'autor_id' });

module.exports = Post;
