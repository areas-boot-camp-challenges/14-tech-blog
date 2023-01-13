// Dependencies.
const commentRouter = require("express").Router()

// Import the models.
// const { Comment } = require("../../models")

// POST /api/post/:post/comment (publishComment).
commentRouter.post("/post/:post/comment", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/post/:post/comment/:comment (getComment).
commentRouter.get("/post/:post/comment/:comment", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// PATCH /api/post/:post/comment/:comment (editComment).
commentRouter.patch("/post/:post/comment/:comment", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// DELETE /api/post/:post/comment/:comment (deleteComment).
commentRouter.delete("/post/:post/comment/:comment", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/post/:post/comments (getComments).
commentRouter.get("/post/:post/comments", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = commentRouter
