const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Autor = sequelize.define('autor', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING
  }
});

module.exports = Autor;
