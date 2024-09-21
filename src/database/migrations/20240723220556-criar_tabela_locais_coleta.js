'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'locais_coleta',
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
        descricao: {
          type: Sequelize.TEXT,
        },
        cep: {
          type: Sequelize.STRING(9),
          allowNull: false
        },
        lon: {
          type: Sequelize.STRING(100),
        },
        lat: {
          type: Sequelize.STRING(100),
        },
        googleMapsLink: {
          type: Sequelize.STRING(100),
        },
        contato: {
          type: Sequelize.STRING(100),
        },
        tipo_residuos: {
          type: Sequelize.STRING(150),
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:  {
            model: 'usuarios',
            key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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
    await queryInterface.dropTable('locais_coleta')
  }
};
