// Dependencies.
const Sequelize = require("sequelize")
require("dotenv").config()

// Use Sequelize to set up a connection to the database.
if (process.env.JAWSDB_URL) {
  // Heroku.
  sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
  // localhost.
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
    },
  )
}

// Connect to the database.
sequelize
.authenticate()
.then( () => console.log(`Connected to the ${process.env.DB_NAME} database! ✅`) )
.catch( err => console.error(`Unable to connect to the ${process.env.DB_NAME} database ❗️:`, err) )

module.exports = sequelize
