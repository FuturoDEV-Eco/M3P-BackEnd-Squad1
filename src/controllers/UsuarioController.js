const Usuario = require("../models/Usuario")
const { compareSync } = require("bcryptjs")
const { sign } = require("jsonwebtoken")

const regexCpf = new RegExp(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
const regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

class UsuarioController{

    async criarUsuario(request, response){
        try {
            
            const dados = request.body 

            if(!dados.nome || !dados.email || !dados.password || !dados.data_nascimento || !dados.cpf  ){
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

            if(dados.password.length <8 || dados.password.length >16){
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
                password: dados.password,
                sexo: dados.sexo,
                data_nascimento: dados.data_nascimento,
                endereco: dados.endereco,
                cpf: dados.cpf
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


    async login(request, response){
        try {
            const dados = request.body

        if(!dados.email || !dados.password){
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
            dados.password, usuario.password
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