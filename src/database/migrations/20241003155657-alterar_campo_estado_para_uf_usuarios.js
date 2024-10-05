'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('usuarios', 'estado', 'uf');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('usuarios', 'uf', 'estado');
  }
};
