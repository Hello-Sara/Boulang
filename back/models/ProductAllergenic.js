// ProductAllergenic.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const ProductAllergenic = sequelize.define('ProductAllergenic', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  productId: { type: DataTypes.INTEGER },
  allergenicId: { type: DataTypes.INTEGER }
}, {
  timestamps: false
});

module.exports = ProductAllergenic;