const Sequelize = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite:./database_development.sqlite')

module.exports = sequelize;