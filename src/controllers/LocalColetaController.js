const LocalColeta = require("../models/LocalColeta")
const { getMapLocal, getGoogleMapsLink } = require("../services/map.service")

class LocalColetaController{

    async criarLocal(request, response){
        try {
            const dados = request.body

            if(!dados.nome || !dados.cep ){
                return response.status(400)
                .json({mensagem: "Nome do local e CEP  são obrigatórios"})
            }

            const local = await getMapLocal(dados.cep)
            const link = await getGoogleMapsLink(local)

            const novoLocal = await LocalColeta.create({
                nome: dados.nome,
                descricao: dados.descricao,
                cep: dados.cep,
                lon: local.lon,
                lat: local.lat,
                googleMapsLink: link,
                contato: dados.contato,
                tipo_residuos: dados.tipo_residuos,
                usuario_id: request.usuarioId
            })

            response.status(201)
            .json(novoLocal)
        

        } catch (error) {
            
            return response.status(500)
            .json({ mensagem: error.message })
        }
    }

    async listarLocais(request, response){
        try {
            const locais = await LocalColeta.findAll({
                where: {usuario_id: request.usuarioId}
            })

            if(locais.length === 0){
                return response.status(404)
                .json({ mensagem: "Você não possui locais de coleta cadastrados" })
            }

            return response.status(201).json(locais)
 
         } catch (error) {
            response.status(500)
            .json({ mensagem: "Erro ao encontrar seus locais de coleta" })
         }
    }

    async listarUmLocal(request, response){
        try {
            const id = request.params.id
            const local = await LocalColeta.findOne({
                where: {
                    id: id,
                    usuario_id: request.usuarioId
                }
            })

            if(!local) {
                return response.status(404).json({ mensagem: 'Local de coleta não encontrado' })
            }
            
            response.status(201).json(local)

        } catch (error) {
            response.status(500)
            .json({ mensagem: "Erro ao encontrar este local" })
            
        }
    }

    async deletar(request, response){
        try {
            const id = request.params.id
            const local = await LocalColeta.findOne({
                where: {
                    id: id,
                    usuario_id: request.usuarioId
                }
            })

            if(!local) {
                return response.status(404).json({ mensagem: 'Local não encontrado' })
            }

            await local.destroy()
            response.status(204).json()
            
        } catch (error) {
            response.status(500)
            .json({mensagem: 'Erro ao deletar local'})
            
        }
    }

    async atualizar(request, response){
        try {
            const id = request.params.id
            const dados = request.body

            const localColeta = await LocalColeta.findOne({
                where: {
                    id: id,
                    usuario_id: request.usuarioId
                }
            })

            if(!localColeta) {
                return response.status(404).json({ mensagem: 'Local não encontrado' })
            }

            if(dados.cep){
                const local = await getMapLocal(dados.cep)
                const link = await getGoogleMapsLink(local)

                localColeta.cep = dados.cep
                localColeta.lon = local.lon
                localColeta.lat = local.lat
                localColeta.googleMapsLink = link

            }

            localColeta.nome = dados.nome
            localColeta.descricao = dados.descricao
            localColeta.contato = dados.contato
            localColeta.tipo_residuos = dados.tipo_residuos
            await localColeta.save()

            response.json(localColeta)


        } catch (error) {
            console.log(error)
            response.status(500)
            .json({mensagem: 'Erro ao atualizar local de coleta'})
            
        }
    }

    async buscarLinkGoogle(request, response){
        try {
            const id = request.params.id
            const linkGoogle = await LocalColeta.findOne({
                where: {
                    id: id,
                    usuario_id: request.usuarioId
                },
                attributes: ['googleMapsLink']
            })

            if(!linkGoogle) {
                return response.status(404).json({ mensagem: 'Nenhum link anexado a este local' })
            }
            
            response.status(201).json(linkGoogle)

        } catch (error) {
            response.status(500)
            .json({ mensagem: "Erro ao encontrar este local" })
            
        }
    }
   

}

module.exports = new LocalColetaController()