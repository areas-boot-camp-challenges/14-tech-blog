// Dependencies.
const htmlRouter = require("express").Router()

const { User, Post } = require("../../models")

// GET / route (renderHome).
htmlRouter.get("/", async (req, res) => {
	try {
		// Search for all posts.
		const postsRaw = await Post.findAll({
			include: [
				{
					model: User,
					as: "user",
					attributes: [
						"displayName",
						"firstName",
						"lastName",
					],
				},
			],
		})
		const posts = postsRaw.map(post => post.toJSON())
		// Pass posts and session flag to template.
		res.render("home", {
			posts: posts,
			signedIn: req.session.signedIn,
		})
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /sign-up route (renderSignUp).
htmlRouter.get("/sign-up", async (req, res) => {
	try {
		if (!req.session.signedIn) {
			res.render("sign-up")
		} else {
			res.redirect("/dashboard")
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /sign-in route (renderSignIn).
htmlRouter.get("/sign-in", async (req, res) => {
	try {
		if (!req.session.signedIn) {
			res.render("sign-in")
		} else {
			res.redirect("/dashboard")
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /dashboard route (renderDashboard).
htmlRouter.get("/dashboard", async (req, res) => {
	try {
		if (!req.session.signedIn) {
			res.render("sign-in")
		} else {
			res.render("dashboard", {
				"signedIn": req.session.signedIn,
			})
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = htmlRouter
