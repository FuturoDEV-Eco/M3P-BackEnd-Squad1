const { Router } = require('express')
const usuariosRoutes = require('./usuarios.routes')
const locaisColetaRoutes = require('./locaisColeta.routes')

const routes = new Router()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./doc.swagger.json')

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
routes.use('/usuarios', usuariosRoutes)
routes.use('/locaisColeta', locaisColetaRoutes)


module.exports = routes 