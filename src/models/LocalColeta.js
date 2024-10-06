const connection = require("../database/connection")
const { DataTypes } = require('sequelize')


const LocalColeta = connection.define(
    "locais_coleta", {
        nome: {
            type: DataTypes.STRING
        },
        descricao: {
            type: DataTypes.TEXT
        },
        cep: {
            type: DataTypes.STRING
        },
        lon: {
            type: DataTypes.STRING
        },
        lat: {
            type: DataTypes.STRING
        },
        logradouro: {
            type: DataTypes.STRING
        },
        complemento: {
            type: DataTypes.STRING
        },
        numero: {
            type: DataTypes.STRING
        },
        bairro: {
            type: DataTypes.STRING
        },
        localidade: {
            type: DataTypes.STRING
        },
        uf: {
            type: DataTypes.STRING
        },
        googleMapsLink: {
            type: DataTypes.STRING
        },
        contato: {
            type: DataTypes.STRING
        },
        tipos_residuo: {
            type: DataTypes.ENUM(['Vidro', 'Metal', 'Papel', 'Plástico', 'Orgânico', 'Baterias'])
        },
        usuario_id: {
            type: DataTypes.INTEGER
        }

    }
)

module.exports = LocalColeta