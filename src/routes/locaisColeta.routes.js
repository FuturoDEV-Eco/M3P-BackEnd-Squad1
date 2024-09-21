const { Router } = require('express')
const LocalColetaController = require('../controllers/LocalColetaController')
const auth = require('../middlewares/auth')

const locaisColetaRoutes = new Router()

locaisColetaRoutes.post("/", auth, LocalColetaController.criarLocal
/*
    #swagger.tags = ['Locais de Coleta'],
    #swagger.description = 'Endpoint para criar um local de coleta',
    #swagger.parameters['criarLocal'] = {
        in: 'body',
        description: 'Dados do novo local de coleta',
        schema: { 
            $nome: "Teste",
            $descricao: "Exemplo de descrição",
            $cep: "88888888",
            $contato: "(48) 999999999",
            $tipo_residuos: "Papelão e metais",
            }
        }
*/
)

locaisColetaRoutes.get("/", auth, LocalColetaController.listarLocais
/*
    #swagger.tags = ['Locais de Coleta'],
    #swagger.description = 'Endpoint para listar todos os seus locais de coleta cadastrados',
*/
)

locaisColetaRoutes.get("/:id", auth, LocalColetaController.listarUmLocal
/*
    #swagger.tags = ['Locais de Coleta'],
    #swagger.description = 'Endpoint para listar um local de coleta específico',
*/
)

locaisColetaRoutes.delete("/:id", auth, LocalColetaController.deletar
/*
    #swagger.tags = ['Locais de Coleta'],
    #swagger.description = 'Endpoint para excluir um local de coleta cadastrado',
*/
)

locaisColetaRoutes.put("/:id", auth, LocalColetaController.atualizar
/*
    #swagger.tags = ['Locais de Coleta'],
    #swagger.description = 'Endpoint para atualizar dados de um local de coleta',
    #swagger.parameters['atualizar'] = {
        in: 'body',
        description: 'Dados novos do local de coleta',
        schema: { 
            $nome: "Novo nome",
            $descricao: "Exemplo de nova descrição"
            }
        }
*/
)

locaisColetaRoutes.get("/:id/maps", auth, LocalColetaController.buscarLinkGoogle
/*
    #swagger.tags = ['Locais de Coleta'],
    #swagger.description = 'Endpoint para acessar link do Google com a localização do local de coleta',
*/
)

module.exports = locaisColetaRoutes