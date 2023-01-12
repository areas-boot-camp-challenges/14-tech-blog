// Dependencies.
const userRouter = require("express").Router()

// Import the models.
// const { User } = require("../../models/User")

// POST /api/user (signUpUser).
userRouter.post("/", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/user/:id (getUser).
userRouter.get("/:id", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// PATCH /api/user/:id (updateUser).
userRouter.patch("/:id", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// POST /api/user/sign-in (signInUser).
userRouter.post("/sign-in", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// POST /api/user/sign-out (signOutUser).
userRouter.post("/sign-out", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = userRouter
