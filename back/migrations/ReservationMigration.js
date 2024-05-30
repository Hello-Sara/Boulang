// migrations/ReservationMigration.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reservations', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      // Ajoutez ici les autres champs nécessaires
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reservations');
  }
};