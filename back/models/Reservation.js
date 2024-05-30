// Reservation.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Reservation = sequelize.define('Reservation', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  date: { type: DataTypes.DATEONLY, allowNull: false },
  heure: { type: DataTypes.TIME, allowNull: false },
  cartId: { type: DataTypes.INTEGER }
}, {
  timestamps: false
});

module.exports = Reservation;