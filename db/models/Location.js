const conn = require('../conn.js');
const Sequelize = require('sequelize');

const Location = conn.define('locations', {
  name: Sequelize.STRING,
  lat: Sequelize.STRING,
  lng: Sequelize.STRING,
});

module.exports = Location;
