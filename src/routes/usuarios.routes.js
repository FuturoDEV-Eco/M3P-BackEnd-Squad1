const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const auth = require('../middlewares/auth')

const usuariosRoutes = new Router()

usuariosRoutes.post("/", UsuarioController.criarUsuario
/*
    #swagger.tags = ['Usuários'],
    #swagger.description = 'Endpoint para criar um usuário',
    #swagger.parameters['criarUsuario'] = {
        in: 'body',
        description: 'Dados para criar um usuário',
        required: true,
        schema: { 
            $nome: "Nome do usuário",
            $email: "email@exemplo.com",
            $senha: "senha123",
            $sexo: "Feminino ou Masculino",
            $dataNascimento: "AAAA-MM-DD",
            $cpf: "111.111.111-11",
            $cep: "11111-111",
            $logradouro: "Logradouro do usuário",
            $bairro: "Bairro do usuário",
            $cidade: "Cidade do usuário",
            $uf: "Estado do usuário",
            $complemento: "Complemento do endereço do usuário",
            }
        }
*/
)
usuariosRoutes.get("/", auth, UsuarioController.listarUsuarios
    /*
        #swagger.tags = ['Usuários'],
        #swagger.description = 'Endpoint para listar todos os usuários'
    */
)

usuariosRoutes.delete("/:id", auth, UsuarioController.deletarUsuario
    /*
        #swagger.tags = ['Usuários'],
        #swagger.description = 'Endpoint para deletar usuários',
         #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id para excluir usuário',
            required: true,
            type: 'integer'
        }
    */
)

usuariosRoutes.put("/:id", auth, UsuarioController.atualizarUsuario
    /*
        #swagger.tags = ['Usuários'],
        #swagger.description = 'Endpoint para atualizar usuário já existente',
        #swagger.parameters['atualizaUsuario'] = {
            in: 'body',
            description: 'Dados para atualizar o usuário',
            required: true,
            schema: { 
                $nome: "Nome do usuário",
                $email: "email@exemplo.com",
                $senha: "senha123",
                $sexo: "Feminino ou Masculino",
                $dataNascimento: "AAAA-MM-DD",
                $cpf: "111.111.111-11",
                $cep: "11111-111",
                $logradouro: "Logradouro do usuário",
                $bairro: "Bairro do usuário",
                $cidade: "Cidade do usuário",
                $uf: "Estado do usuário",
                $complemento: "Complemento do endereço do usuário",
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
        description: 'Dados de login do usuário',
        required: true,
        schema: { 
            $email: "email@exemplo.com",
            $senha: "senha123"
            }
        }
*/
)

module.exports = usuariosRoutes