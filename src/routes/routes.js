const { Router } = require('express')
const usuariosRoutes = require('./usuarios.routes')
const locaisColetaRoutes = require('./locaisColeta.routes')
const dashboardRoutes = require('./dashboard.routes')

const routes = new Router()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./doc.swagger.json')

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
routes.use('/usuarios', usuariosRoutes)
routes.use('/locaisColeta', locaisColetaRoutes)
routes.use('/dashboard', dashboardRoutes)


module.exports = routes 