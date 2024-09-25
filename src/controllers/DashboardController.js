const LocalColeta = require("../models/LocalColeta")
const Usuario = require("../models/Usuario")


class DashboardController{

    async listarLocais(request, response){
        try {
            const locais = await LocalColeta.findAll()

            if(locais.length === 0){
                return response.status(404)
                .json({ mensagem: "Nenhum local de coleta encontrado" })
            }

            return response.status(200).json(locais)

        } catch (error) {
            response.status(500)
            console.log(error)
            .json({ mensagem: "Erro ao encontrar locais de coleta" })
    
        }
    }

    async listarTotalLocais(request, response){
        try {
            const total = await LocalColeta.count()

            return response.status(200).json(total)

        } catch (error) {
            response.status(500)
            .json({ mensagem: "Não foi possível mostrar o total de locais de coleta cadastrados" })
        }
    }

    async listarTotalUsuarios(request, response){
        try {
            const total = await Usuario.count()

            return response.status(200).json(total)

        } catch (error) {
            response.status(500)
            .json({ mensagem: "Não foi possível mostrar o total de usuários ativos" })
        }
    }


}

module.exports = new DashboardController()