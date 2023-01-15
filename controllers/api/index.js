// Dependencies.
const apiRouter = require("express").Router()

// API routes.
const userRoutes = require("./routes/userRoutes")
const postRoutes = require("./routes/postRoutes")
const commentRoutes = require("./routes/commentRoutes")

// Use the API routes.
apiRouter.use("/", userRoutes)
apiRouter.use("/", postRoutes)
apiRouter.use("/", commentRoutes)

module.exports = apiRouter
