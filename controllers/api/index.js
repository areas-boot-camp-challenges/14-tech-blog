// Dependencies.
const apiRouter = require("express").Router()

// API routes.
const userRoutes = require("./definitions/userRoutes")
// const postRoutes = require("./definitions/postRoutes")
// const commentRoutes = require("./definitions/commentRoutes")

// Use the API routes.
apiRouter.use("/user", userRoutes)
// apiRouter.use("/post", postRoutes)
// apiRouter.use("/post/comment", commentRoutes)

module.exports = apiRouter
