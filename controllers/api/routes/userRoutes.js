// Dependencies.
const userRouter = require("express").Router()

// Import the models.
const { User } = require("../../../models")

const searchForUser = async (userId) => {
	const user = await User.findOne({
		attributes: [
			"userId",
			"displayName",
			"firstName",
			"lastName",
			"email",
		],
		where: {
			"userId": userId,
		},
	})
	if (user) {
		return user.toJSON()
	} else if (!user) {
		return null
	}
}

// POST /api/user (signUpUser).
userRouter.post("/user", async (req, res) => {
	try {
		// Create the user.
		const newUser = await User.create(req.body)
		// Return the user.
		const user = await searchForUser(newUser.userId)
		res.status(200).json(user)
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/user/:userId (getUser).
userRouter.get("/user/:userId", async (req, res) => {
	try {
		// Search for the user.
		const user = await searchForUser(req.params.userId)
		// If the user’s found, return the user. Else, return a 404 message.
		if (user) {
			res.status(200).json(user)
		} else {
			res.status(404).json("User not found.")	
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// PATCH /api/user/:userId (updateUser).
userRouter.patch("/user/:userId", async (req, res) => {
	try {
		// Update the user.
		await User.update(req.body, { where: { userId: req.params.userId }, individualHooks: true })
		// Search for the user.
		const user = await searchForUser(req.params.userId)
		// If the user’s found, return the user. Else, return a 404 message.
		if (user) {	
			res.status(200).json(user)
		} else {
			res.status(404).json("User not found.")	
		}
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
