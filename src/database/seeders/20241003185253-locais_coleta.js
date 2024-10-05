'use strict';

const Usuario = require('../../models/Usuario');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuario = await Usuario.findOne({});

    const idUsuario = usuario.get().id

    await queryInterface.bulkInsert('locais_coleta', [{
       nome: 'Ecoponto Itacorubi',
       descricao: 'Ponto de coleta para entrega voluntária de resíduos',
       cep: '88034000',
       lon: '-48.5121817',
       lat: '-27.5776757',
       logradouro: 'Rodovia Admar Gonzaga',
       complemento: '',
       numero: '72',
       bairro: 'Itacorubi',
       localidade: 'Florianópolis',
       uf: 'SC',
       googleMapsLink: 'https://www.google.com/maps/@-27.5776395,-48.5124244,3a,75y,169.08h,73.85t/data=!3m6!1e1!3m4!1sP_uoCI6DGW2YNvyzp_xxCA!2e0!7i16384!8i8192?hl=pt-BR&coh=205409&entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D',
       contato: '',
       tipos_residuo: '',
       usuario_id: idUsuario,
       createdAt: '2024-09-25 16:31:44.273-03',
      updatedAt: '2024-09-25 16:31:44.273-03'
     },
     {
      nome: 'Ecoponto Rio Vermelho',
      descricao: 'Centro de Reciclagem',
      cep: '88060259',
      lon: '-48.4126311',
      lat: '-27.4784022',
      logradouro: 'Servidão Honorina Rosa Silva',
      complemento: '',
      numero: 's/n',
      bairro: 'São João do Rio Vermelho',
      localidade: 'Florianópolis',
      uf: 'SC',
      googleMapsLink: 'https://www.google.com.br/maps/place/Ecoponto+Rio+Vermelho/@-27.4784022,-48.4126311,97m/data=!3m1!1e3!4m6!3m5!1s0x952741d54f990bdb:0xa88e1ca9bfcbee2a!8m2!3d-27.4784022!4d-48.4124208!16s%2Fg%2F11s7fw9gb8?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D',
      contato: '',
      tipos_residuo: '',
      usuario_id: idUsuario,
      createdAt: '2024-09-25 16:31:44.273-03',
      updatedAt: '2024-09-25 16:31:44.273-03'
    },
    {
      nome: 'Ecoponto Monte Cristo',
      descricao: 'Ponto de coleta para entrega voluntária de resíduos. Não recebe resíduos de poda, nem pneu.',
      cep: '88090512',
      lon: '-48.6037913',
      lat: '-27.5901257',
      logradouro: 'Rua dos Pinheiros Verdes',
      complemento: '',
      numero: '2954',
      bairro: 'Monte Cristo',
      localidade: 'Florianópolis',
      uf: 'SC',
      googleMapsLink: 'https://www.google.com.br/maps/@-27.5901069,-48.6037882,3a,75y,92.83h,90t/data=!3m7!1e1!3m5!1sNKT14R3P1QfuvnVGpSPuqw!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3DNKT14R3P1QfuvnVGpSPuqw%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D93.19105%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D',
      contato: '',
      tipos_residuo: '',
      usuario_id: idUsuario,
      createdAt: '2024-09-25 16:31:44.273-03',
      updatedAt: '2024-09-25 16:31:44.273-03'
    },
    {
      nome: 'Ecoponto Ingleses',
      descricao: 'Serviço de gerenciamento de descartes.',
      cep: '88058590',
      lon: '48.4084304',
      lat: '-27.4335386',
      logradouro: 'Rua Coletora Insular',
      complemento: '',
      numero: 's/n',
      bairro: 'Ingleses do Rio Vermelho',
      localidade: 'Florianópolis',
      uf: 'SC',
      googleMapsLink: 'https://www.google.com/maps/place/Ecoponto+Ingleses/@-27.4334996,-48.4085363,15z/data=!4m6!3m5!1s0x95274339ce42f505:0x2412f8cfc9e8bec0!8m2!3d-27.4334996!4d-48.4085363!16s%2Fg%2F11t5d9dvc9?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D',
      contato: '',
      tipos_residuo: '',
      usuario_id: idUsuario,
      createdAt: '2024-09-25 16:31:44.273-03',
      updatedAt: '2024-09-25 16:31:44.273-03'
    },
    {
      nome: 'Ecoponto Capoeiras',
      descricao: 'Ponto de coleta para entrega voluntária de resíduos.',
      cep: '88090500',
      lon: '-48.6029333',
      lat: '-27.5970339',
      logradouro: 'Rua Professor Egídio Ferreira',
      complemento: '',
      numero: '1770',
      bairro: 'Monte Cristo',
      localidade: 'Florianópolis',
      uf: 'SC',
      googleMapsLink: 'https://www.google.com.br/maps/place/PEV+de+Capoeiras+Comcap+-+Ponto+de+entrega+volunt%C3%A1ria+de+res%C3%ADduos/@-27.6067837,-48.6041848,3087m/data=!3m1!1e3!4m6!3m5!1s0x9527362c3a2baae7:0xff8610c38b1b4ec4!8m2!3d-27.5970244!4d-48.6028669!16s%2Fg%2F11b6_bg00z?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D',
      contato: '',
      tipos_residuo: '',
      usuario_id: idUsuario,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('locais_coleta', null, {});
    
  }
};
