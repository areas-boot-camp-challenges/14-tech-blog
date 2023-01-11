// Dependencies.
const htmlRouter = require("express").Router()

// GET / route (render the home page).
htmlRouter.get("/", async (req, res) => {
  try {
    res.render("home")
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = htmlRouter
