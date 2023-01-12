// Dependencies.
const apiRouter = require("express").Router()

// API routes.
const userRoutes = require("./userRoutes")
const postRoutes = require("./postRoutes")
const commentRoutes = require("./commentRoutes")

// Use the API routes.
apiRouter.use("/user", userRoutes)
apiRouter.use("/post", postRoutes)
apiRouter.use("/post/comment", commentRoutes)

module.exports = apiRouter
