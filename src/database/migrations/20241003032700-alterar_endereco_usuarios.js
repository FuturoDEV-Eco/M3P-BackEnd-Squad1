'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'usuarios', 'cep', 
      {
      type: Sequelize.STRING(10),
      allowNull: false,
      })

    await queryInterface.addColumn(
      'usuarios', 'logradouro',
      {
      type: Sequelize.STRING,
      allowNull: false,
      })

    await queryInterface.addColumn(
      'usuarios', 'bairro', 
      {
      type: Sequelize.STRING,
      allowNull: false,
      })

    await queryInterface.addColumn(
      'usuarios', 'cidade', 
      {
      type: Sequelize.STRING,
      allowNull: false,
      })

    await queryInterface.addColumn(
      'usuarios', 'estado', 
      {
      type: Sequelize.STRING,
      allowNull: false,
      })

    await queryInterface.addColumn(
      'usuarios', 'complemento',
      {
      type: Sequelize.STRING,
      allowNull: true,
      })

    await queryInterface.removeColumn('usuarios', 'endereco')
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('usuarios', 'cep');
    await queryInterface.removeColumn('usuarios', 'logradouro');
    await queryInterface.removeColumn('usuarios', 'bairro');
    await queryInterface.removeColumn('usuarios', 'cidade');
    await queryInterface.removeColumn('usuarios', 'estado');
    await queryInterface.removeColumn('usuarios', 'complemento');
    
    await queryInterface.addColumn(
    'usuarios', 'endereco', 
      {
        type: Sequelize.STRING(200),
        allowNull: true
      })
  }
};
