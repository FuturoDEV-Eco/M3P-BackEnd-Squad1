const { Router } = require('express')
const DashboardController = require('../controllers/DashboardController')

const dashboardRoutes = new Router()

dashboardRoutes.get("/", DashboardController.listarLocais)
dashboardRoutes.get("/totalLocais", DashboardController.listarTotalLocais)
dashboardRoutes.get("/totalUsuarios", DashboardController.listarTotalUsuarios)

module.exports = dashboardRoutes