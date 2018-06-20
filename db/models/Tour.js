const conn = require('../conn.js');
const Sequelize = require('sequelize');

const Tour = conn.define('tours', {
  name: Sequelize.STRING,
  customers: Sequelize.INTEGER
});

module.exports = Tour;
