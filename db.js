const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('actividad_8', 'root', 'Sanfermin7.', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.error('No se pudo conectar:', err));

module.exports = sequelize;
