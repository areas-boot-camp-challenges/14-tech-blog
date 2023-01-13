// Dependencies.
const userRouter = require("express").Router()

// Import the models.
const { User } = require("../../models")

// POST /api/user (signUpUser).
userRouter.post("/user", async (req, res) => {
	try {
		// Create the user.
		const user = await User.bulkCreate(req.body, {
			attributes: [ // ** this doesn’t work as expected
				"userId",
				"displayName",
				"firstName",
				"lastName",
				"email",
			],
		})
		// Return the user.
		res.status(200).json(user.toJSON())
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/user/:user (getUser).
userRouter.get("/user/:user", async (req, res) => {
	try {
		// Search for the user by the user ID.
		const user = await User.findOne({
			attributes: [
				"userId",
				"displayName",
				"firstName",
				"lastName",
				"email",
			],
			where: {
				"userId": req.params.user,
			},
		})
		// If the user’s found, return the user. Else, return a 404 error message.
		if (user) {
			res.status(200).json(user.toJSON())
		} else if (!user) {
			res.status(404).json("User not found.")	
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// PATCH /api/user/:user (updateUser).
userRouter.patch("/user/:user", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// POST /api/user/sign-in (signInUser).
userRouter.post("/user/sign-in", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// POST /api/user/sign-out (signOutUser).
userRouter.post("/user/sign-out", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = userRouter
