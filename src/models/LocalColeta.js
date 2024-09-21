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
        googleMapsLink: {
            type: DataTypes.STRING
        },
        contato: {
            type: DataTypes.STRING
        },
        tipo_residuos: {
            type: DataTypes.STRING
        },
        usuario_id: {
            type: DataTypes.INTEGER
        }

    }
)

module.exports = LocalColeta