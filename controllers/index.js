// Dependencies.
const mainRouter = require("express").Router()

// API and HTML routes.
const apiRoutes = require("./api")
const htmlRoutes = require("./html")

// Set up the routes.
mainRouter.use('/', htmlRoutes)
mainRouter.use('/api', apiRoutes)

module.exports = mainRouter
