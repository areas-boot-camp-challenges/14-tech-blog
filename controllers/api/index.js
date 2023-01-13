// Dependencies.
const apiRouter = require("express").Router()

// API routes.
const userRoutes = require("./userRoutes")
const postRoutes = require("./postRoutes")
const commentRoutes = require("./commentRoutes")

// Use the API routes.
apiRouter.use("/", userRoutes)
apiRouter.use("/", postRoutes)
apiRouter.use("/", commentRoutes)

module.exports = apiRouter
