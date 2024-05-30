'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const Product = require('./Product');
const Allergenic = require('./Allergenic');
const ProductAllergenic = require('./ProductAllergenic');
const User = require('./User');
const Cart = require('./Cart');
const CartProduct = require('./CartProduct');
const Reservation = require('./Reservation');

// Définir les relations entre les modèles
Product.belongsToMany(Allergenic, { through: ProductAllergenic });
Allergenic.belongsToMany(Product, { through: ProductAllergenic });
User.hasOne(Cart);
Cart.belongsTo(User);
Product.belongsToMany(Cart, { through: CartProduct });
Cart.belongsToMany(Product, { through: CartProduct });
Cart.hasOne(Reservation);
Reservation.belongsTo(Cart);

// Synchroniser les modèles avec la base de données
sequelize.sync();

module.exports = db;
