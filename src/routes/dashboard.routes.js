const { Router } = require('express')
const DashboardController = require('../controllers/DashboardController')

const dashboardRoutes = new Router()

dashboardRoutes.get("/", DashboardController.listarLocais
   /*
    #swagger.tags = ['Dashboard'],
    #swagger.description = 'Endpoint para listar todos os locais de coleta cadastrados.'
  */
)
dashboardRoutes.get("/totalLocais", DashboardController.listarTotalLocais
    /*
    #swagger.tags = ['Dashboard'],
    #swagger.description = 'Endpoint para listar a quantidade total de locais de coleta cadastrados.'
  */
)
dashboardRoutes.get("/totalUsuarios", DashboardController.listarTotalUsuarios
    /*
    #swagger.tags = ['Dashboard'],
    #swagger.description = 'Endpoint para listar a quantidade total de usuários cadastrados.'
  */
)

module.exports = dashboardRoutes