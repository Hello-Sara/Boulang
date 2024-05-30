const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Cart = sequelize.define('Cart', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER }
}, {
  timestamps: false
});

module.exports = Cart;