// Dependencies.
const userRouter = require("express").Router()

// Import the models.
const { User } = require("../../../models/definitions/User")

// GET /api/user/:id (getUser).
userRouter.get("/api/user/:id", async (req, res) => {
	try {
		const userId = req.params.id
		// Get user details.
		const user = await User.findOne({
			attributes: [
				"user_id",
				"first_name",
				"last_name",
				"email",
			],
			where: {
				"userId": userId,
			},
		})
		res.status(200).json(user)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = userRouter