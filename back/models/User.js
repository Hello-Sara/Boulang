// User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  telephone: DataTypes.STRING
}, {
  timestamps: false
});

module.exports = User;