// CartProduct.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const CartProduct = sequelize.define('CartProduct', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  productId: { type: DataTypes.INTEGER },
  cartId: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER, allowNull: false }
}, {
  timestamps: false
});

module.exports = CartProduct;