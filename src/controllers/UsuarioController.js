const Usuario = require("../models/Usuario")
const { compareSync } = require("bcryptjs")
const { sign } = require("jsonwebtoken")
const LocalColeta = require('../models/LocalColeta');

const regexCpf = new RegExp(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
const regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

class UsuarioController{

    async criarUsuario(request, response){
        try {
            
            const dados = request.body 

            if(!dados.nome || !dados.email || !dados.senha || !dados.dataNascimento || !dados.cpf || !dados.sexo  || !dados.cep){
                return response.status(400)
                .json({mensagem: "Existem dados obrigatórios incompletos"}) 
            }

            if(regexEmail.test(dados.email) === false){
                return response.status(400)
                .json({ mensagem: "O email está incorreto, por favor insira um email válido" })
            }

            if(regexCpf.test(dados.cpf) === false){
                return response.status(400)
                .json({ mensagem: "O CPF está incorreto, por favor insira um CPF válido" })
            }

            if(dados.senha.length <8 || dados.senha.length >16){
                return response.status(400)
                .json({mensagem: "A senha deve ter no mínimo 8 e no máximo 16 caracteres" })
            }

            const emailExistente = await Usuario.findOne({
                where: {email: dados.email}
            })

            const cpfExistente = await Usuario.findOne({
                where: {cpf: dados.cpf}
            })

            if(emailExistente || cpfExistente){
                return response.status(409)
                .json({ mensagem: "Email ou CPF indisponível"})
            }

            const novoUsuario = await Usuario.create({
                nome: dados.nome,
                email: dados.email,
                password: dados.senha,
                sexo: dados.sexo,
                data_nascimento: dados.dataNascimento,
                cpf: dados.cpf,
                cep: dados.cep,
                logradouro: dados.logradouro,
                bairro: dados.bairro,
                cidade: dados.cidade,
                uf: dados.uf,
                complemento: dados.complemento
            })

            response.status(201)
            .json({
                nome: novoUsuario.nome,
            })
            

        } catch (error) {
            console.log(error)
            response.status(500).json({mensagem: "Erro ao criar novo usuário"})
        }

    }

    async listarUsuarios(request, response) {
        try {
            const usuarios = await Usuario.findAll({
                attributes: ['id', 'nome', 'email', 'sexo'] // selecione os campos que deseja listar
            });
    
            if (usuarios.length === 0) {
                return response.status(404).json({ mensagem: "Nenhum usuário encontrado" });
            }
    
            response.status(200).json(usuarios);
        } catch (error) {
            console.log(error);
             return response.status(500).json({ mensagem: "Erro ao buscar usuários" });
        }
    }

    async deletarUsuario(request, response) {
        try {
            const id = request.params.id
            const usuario = await Usuario.findByPk(id)

            if (!usuario) {              
             return response.status(404).json({mensagem: 'Usuário não encontrado'})
            }


            const locaisColeta = await LocalColeta.findAll({ where: { usuario_id: id } })
            if (locaisColeta.length) {
            return response.status(400).json({ mensagem: "Usuário possui pontos de coleta associados e não pode ser deletado" })
            }

            await usuario.destroy()

            return response.status(200).json({mensagem: 'Usuário excluido com sucesso'})

        } catch (error) {
            return response.status(500).json({mensagem: 'Erro ao deletar o usuário'})
        }
    }

    async atualizarUsuario(request, response) {
        try {
            const id = request.params.id
            const dados = request.body

            const usuario = await Usuario.findByPk(id)

            if (!usuario) {
                return response.status(404).json({ mensagem: 'Usuário não encontrado' })
            }

            if (dados.nome) {
                usuario.nome = dados.nome
            }
            if (dados.email) {
                usuario.email = dados.email
            }
            if (dados.password) {
                usuario.password = dados.senha
            } 
            if (dados.sexo) {
                usuario.sexo = dados.sexo
            }
            if (dados.data_nascimento) {
                usuario.data_nascimento = dados.dataNascimento
            }
            if (dados.cpf) {
                return response.status(400).json({ mensagem: 'Não é permitido editar o CPF.' });
            }
            if (dados.cep) {
                usuario.cep = dados.cep
            }
            if (dados.logradouro) {
                usuario.logradouro = dados.logradouro
            }
            if (dados.bairro) {
                usuario.bairro = dados.bairro
            }
            if (dados.cidade) {
                usuario.cidade = dados.cidade
            }
            if (dados.uf) {
                usuario.uf = dados.uf
            }
            if (dados.complemento) {
                usuario.complemento = dados.complemento
            }
            await usuario.save()

            return response.json(usuario)

        } catch (error) {
            return response.status(500).json({mensagem: 'Erro ao atualizar usuário'})
        }
    }

    async login(request, response){
        try {
            const dados = request.body

        if(!dados.email || !dados.senha){
            return response.status(400)
            .json({ mensagem: "Email e senha são obrigatórios" })
        }

        const usuario = await Usuario.findOne({
            where: {email: dados.email }
        })

        if(!usuario){
            return response.status(404)
            .json({mensagem: "Conta não encontrada"})
        }

        const senhaCorreta = compareSync(
            dados.senha, usuario.password
        )

        if(senhaCorreta === false){
            return response.status(401)
            .json({ mensagem: "Email ou a senha inválido, tente novamente" })
        }

        const token = sign(
            {id: usuario.id },
            process.env.SECRET_JWT,
            {expiresIn: '1d'}
        )

        response.json({
            token: token,
            nome: usuario.nome,
            id: usuario.id,
            email: usuario.email
        })

        } catch (error) {
            console.log(error)
            response.status(500).json({mensagem: "Não foi possível realizar login"})
        }
    }

}

module.exports = new UsuarioController()