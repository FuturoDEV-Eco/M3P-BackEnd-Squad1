const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const usuariosRoutes = new Router()

usuariosRoutes.post("/", UsuarioController.criarUsuario
/*
    #swagger.tags = ['Usuários'],
    #swagger.description = 'Endpoint para criar um usuário',
    #swagger.parameters['criarUsuario'] = {
        in: 'body',
        description: 'Dados do usuário',
        required: true,
        schema: { 
            $nome: "Teste",
            $email: "teste@email.com",
            $password: "senha123",
            $cpf: "111.111.111-11",
            $sexo: "Feminino ou Masculino",
            $data_nascimento: "AAAA-MM-DD",
            $endereco: "Rua, número, Bairro, Cidade, Estado"
            }
        }
*/
)

usuariosRoutes.post("/login", UsuarioController.login
/*
    #swagger.tags = ['Usuários'],
    #swagger.description = 'Endpoint para o usuário realizar login',
    #swagger.parameters['login'] = {
        in: 'body',
        description: 'Dados do usuário',
        required: true,
        schema: { 
            $email: "teste@email.com",
            $password: "senha123"
            }
        }
*/
)

module.exports = usuariosRoutes