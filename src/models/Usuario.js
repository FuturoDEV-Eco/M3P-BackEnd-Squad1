const { hashSync } = require("bcryptjs")
const connection = require("../database/connection")
const { DataTypes } = require('sequelize')


const Usuario = connection.define(
    "usuarios", {
        nome: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        cpf: {
            type: DataTypes.STRING
        },
        sexo: {
            type: DataTypes.STRING
        },
        data_nascimento: {
            type: DataTypes.DATEONLY
        },
        endereco: {
            type: DataTypes.STRING
        },
    
    }
)

Usuario.beforeSave((usuario) => {

    usuario.password = hashSync(usuario.password, 10) 
    return usuario
 })

module.exports = Usuario