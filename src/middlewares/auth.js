const { verify } = require("jsonwebtoken")

function auth(request, response, next){

    try {
        const token = request.headers.authorization

        if(!token){
            return response.status(400)
            .json({ mensagem: "Token vazio, por favor insira um token válido"})
        }

        const jwt = token.split(" ")
        const verificado = verify(jwt[1], process.env.SECRET_JWT)

        request.usuarioId = verificado.id

        next()

    } catch (error) {
        console.log(error)
        if(error.message === "jwt malformed" || error.message === "jwt expired") {
            response.status(401).json({ mensagem: "Token inválido ou expirado" })
        } else {
            response.status(500).json({ mensagem: "Erro na requisição" })
        }
    }
}

module.exports = auth