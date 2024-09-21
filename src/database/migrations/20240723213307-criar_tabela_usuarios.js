'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'usuarios',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(150),
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        sexo: {
          type: Sequelize.STRING,
        },
        data_nascimento: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        endereco: {
          type: Sequelize.STRING(200)
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios')
  }
};
