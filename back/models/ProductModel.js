const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');


const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    energy: DataTypes.FLOAT,
    fat: DataTypes.FLOAT,
    saturatedFats: DataTypes.FLOAT,
    glucides: DataTypes.FLOAT,
    sugars: DataTypes.FLOAT,
    fibres: DataTypes.FLOAT,
    proteins: DataTypes.FLOAT,
    salt: DataTypes.FLOAT
  }, {
    timestamps: false // This will prevent Sequelize from creating the `createdAt` and `updatedAt` fields
});
  
module.exports = Product;