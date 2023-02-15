// Requirements: https://courses.bootcampspot.com/courses/2188/assignments/38651?module_item_id=748940.

// Dependencies.
const express = require("express")
const session = require("express-session")
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const path = require("path")
const handlebars = require("express-handlebars")

// App.
const app = express()
const PORT = process.env.PORT || 3030

// Models.
const sequelize = require("./config/connection")

// Views.
const helpers = require("./utils/helpers")
const hbs = handlebars.create({ helpers })
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

// Controllers.
const routes = require("./controllers")

// Session management.
const sess = {
	secret: process.env.EXPRESS_SECRET,
	cookie: {
		maxAge: 1000 * 60 * 60 * 8, // 8 hrs
		httpOnly: true,
		secure: false,
		sameSite: "strict",
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
}

// Middleware.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(session(sess))

// Set up the routes.
app.use(routes)

// Start the app.
sequelize.sync({ force: false })
	.then( () => app.listen( PORT, () => console.log(`Listening at http://localhost:${PORT}! 🚀`) ) )
