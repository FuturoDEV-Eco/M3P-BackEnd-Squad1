const LocalColeta = require("../models/LocalColeta")
const getGoogleMapsLink = require("../services/map.service")

class LocalColetaController{

    async criarLocal(request, response){
        try {
            const dados = request.body

            if(!dados.nome || !dados.cep ){
                return response.status(400)
                .json({mensagem: "Nome do local e CEP  são obrigatórios"})
            }

            const link = await getGoogleMapsLink({ lat: dados.lat, lon: dados.lon })

            const novoLocal = await LocalColeta.create({
                nome: dados.nome,
                descricao: dados.descricao,
                cep: dados.cep,
                lon: dados.lon,
                lat: dados.lat,
                logradouro: dados.logradouro,
                complemento: dados.complemento,
                numero: dados.numero,
                bairro: dados.bairro,
                localidade: dados.localidade,
                uf: dados.uf,
                googleMapsLink: link,
                contato: dados.contato,
                tipos_residuo: dados.tipos_residuo,
                usuario_id: request.usuarioId
            })

            response.status(201)
            .json(novoLocal)
        

        } catch (error) {
            
            return response.status(500)
            .json({ mensagem: error.message })
        }
    }

//Listagem com usuário logado
    async listarLocais(request, response){
        try {
            const locais = await LocalColeta.findAll()

            /* if(locais.length === 0){
                return response.status(404)
                .json({ mensagem: "Você não possui locais de coleta cadastrados" })
            } */

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

            if(dados.lat || dados.lon){
                const link = await getGoogleMapsLink({ lat: dados.lat, lon: dados.lon })
                localColeta.lon = dados.lon
                localColeta.lat = dados.lat
                localColeta.googleMapsLink = link

            }

            localColeta.nome = dados.nome
            localColeta.descricao = dados.descricao
            localColeta.contato = dados.contato
            localColeta.tipos_residuo = dados.tipos_residuo
            localColeta.cep = dados.cep
            localColeta.logradouro = dados.logradouro
            localColeta.complemento = dados.complemento
            localColeta.numero = dados.numero
            localColeta.bairro = dados.bairro
            localColeta.localidade = dados.localidade
            localColeta.uf = dados.uf
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