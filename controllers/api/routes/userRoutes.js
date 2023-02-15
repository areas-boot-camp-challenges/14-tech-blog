// Dependencies.
const userRouter = require("express").Router()

// Models.
const { User } = require("../../../models")

// Search for a user.
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
		// Get the user.
		const user = await searchForUser(newUser.userId)
		// Create a session.
		req.session.save( () => {
			req.session.userId = newUser.userId
			req.session.signedIn = true
			res.status(200).json(user)
		})
	} catch (err) {
		res.status(500).json(err)
	}
})

// POST /api/user/sign-in (signInUser).
userRouter.post("/user/sign-in", async (req, res) => {
	try {
		// Search for the user (-- by email).
		const signedOutUser = await User.findOne({ where: { email: req.body.email }})
		// If the user’s not found, return a 401 message.
		if (!signedOutUser) {
			res.status(401).send("Sorry, your email or password is incorrect. Try again.")
			return
		}
		// Validate the user’s password.
		const validPassword = await signedOutUser.validatePassword(req.body.password)
		// If the passwords don’t match, return a 401 message. Else create a session.
		if (!validPassword) {
			res.status(401).send("Sorry, your email or password is incorrect. Try again.")
			return
		} else if (validPassword) {
			// Get the user.
			const user = await searchForUser(signedOutUser.userId)
			// Create a session and return the user.
			req.session.save( () => {
				req.session.userId = signedOutUser.userId
				req.session.signedIn = true
				res.status(200).json(user)
			})
		}
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
			res.status(404).json(`User ${req.params.userId} not found.`)
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// PATCH /api/user/:userId (updateUser).
userRouter.patch("/user/:userId", async (req, res) => {
	try {
		// Update the user.
		await User.update(req.body, { where: { "userId": req.params.userId }, individualHooks: true })
		// Search for the user.
		const user = await searchForUser(req.params.userId)
		// If the user’s found, return the user. Else, return a 404 message.
		if (user) {
			res.status(200).json(user)
		} else {
			res.status(404).json(`User ${req.params.userId} not found.`)
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// POST /api/user/sign-out (signOutUser).
userRouter.post("/user/sign-out", async (req, res) => {
	try {
		// If there’s a session, delete it and redirect home. Else, return a 404 message.
		if (req.session.signedIn) {
			req.session.destroy( () => {
				res.status(204).end()
			})
		} else {
			res.status(404).end()
		}	
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = userRouter
