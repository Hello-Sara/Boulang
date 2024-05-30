'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      energy: {
        type: Sequelize.FLOAT
      },
      fat: {
        type: Sequelize.FLOAT
      },
      saturatedFats: {
        type: Sequelize.FLOAT
      },
      glucides: {
        type: Sequelize.FLOAT
      },
      sugars: {
        type: Sequelize.FLOAT
      },
      fibres: {
        type: Sequelize.FLOAT
      },
      proteins: {
        type: Sequelize.FLOAT
      },
      salt: {
        type: Sequelize.FLOAT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};