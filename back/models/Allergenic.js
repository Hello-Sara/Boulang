const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Allergenic = sequelize.define('Allergenic', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false }
}, {
  timestamps: false
});

module.exports = Allergenic;