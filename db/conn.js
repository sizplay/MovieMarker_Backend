const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/move_marker', {
  logging: false
});

module.exports = conn;
