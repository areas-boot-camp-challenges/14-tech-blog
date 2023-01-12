// Dependencies.
const commentRouter = require("express").Router()

// Import the models.
// const { Comment } = require("../../models/Comment")

// POST /api/post/comment (publishComment).
commentRouter.post("/", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/post/comment/:id (getComment).
commentRouter.get("/:id", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// PATCH /api/post/comment/:id (editComment).
commentRouter.patch("/:id", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// DELETE /api/post/comment/:id (deleteComment).
commentRouter.delete("/:id", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = commentRouter
