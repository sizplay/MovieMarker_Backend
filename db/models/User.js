const conn = require('../conn.js');
const Sequelize = require('sequelize');

const User = conn.define('users', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
    getterMethods: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName;
      }
    }
  });

module.exports = User;
