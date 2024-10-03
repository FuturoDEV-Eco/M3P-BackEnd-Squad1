'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuariosFicticios = [
      {
          nome: 'Helena Jaqueline Ayla',
          email: 'helena-ayla96@focusgrafica.com.br',
          password: 'P1Tf7FLm8e',
          sexo: 'Feminino',
          data_nascimento: '1996-05-08',
          cpf: '634.560.990-02',
          cep: '88063-161',
          logradouro: 'Beco da Chica, 733',
          bairro: 'Campeche',
          cidade: 'Florianópolis',
          estado: 'SC',
          complemento: '',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          nome: 'Regina Clara Josefa Caldeira',
          email: 'regina.clara.caldeira@agacapital.com.br',
          password: 'zZZZXhFoSF',
          sexo: 'Feminino',
          data_nascimento: '1989-07-08',
          cpf: '193.664.959-40',
          cep: '88056-378',
          logradouro: 'Servidão Lídio Felipe dos Santos, 683',
          bairro: 'Cachoeira do Bom Jesus',
          cidade: 'Florianópolis',
          estado: 'SC',
          complemento: 'Apto 206',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          nome: 'Luan Sérgio Cauê Moraes',
          email: 'luan-moraes85@valedesign.com.br',
          password: 'izdwM8YQHI',
          sexo: 'Masculino',
          data_nascimento: '2001-10-02',
          cpf: '365.984.769-09',
          cep: '88106-230',
          logradouro: 'Rua Santo Antônio de Lisboa, 490',
          bairro: 'Picadas do Sul',
          cidade: 'São José',
          estado: 'SC',
          complemento: '',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          nome: 'Thales Theo Raimundo Novaes',
          email: 'thalestheonovaes@petrobras.com.br',
          password: '2kpkWLDK40',
          sexo: 'Masculino',
          data_nascimento: '2004-01-19',
          cpf: '561.422.929-96',
          cep: '88130-394',
          logradouro: 'Servidão Silveira, 553',
          bairro: 'Ponte do Imaruim',
          cidade: 'Palhoça',
          estado: 'SC',
          complemento: '',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          nome: 'Sophie Giovanna Joana Porto',
          email: 'sophie_giovanna_porto@wsiconsultores.com.br',
          password: '9CGTthDjkM',
          sexo: 'Feminino',
          data_nascimento: '1998-07-19',
          cpf: '432.536.359-96',
          cep: '88030-400',
          logradouro: 'Rua Francisca Inês da Costa, 520',
          bairro: 'João Paulo',
          cidade: 'Florianópolis',
          estado: 'SC',
          complemento: '',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      
  ]

  await queryInterface.bulkInsert('usuarios', usuariosFicticios);
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', {
      email: {
        [Sequelize.Op.in]: [
          'helena-ayla96@focusgrafica.com.br',
          'regina.clara.caldeira@agacapital.com.br',
          'luan-moraes85@valedesign.com.br',
          'thalestheonovaes@petrobras.com.br',
          'sophie_giovanna_porto@wsiconsultores.com.br'
        ]
      }
    });
    }
};
