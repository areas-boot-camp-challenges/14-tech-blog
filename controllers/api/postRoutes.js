// Dependencies.
const postRouter = require("express").Router()

// Import the models.
// const { Post } = require("../../models/Post")

// POST /api/post (publishPost).
postRouter.post("/", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/post/:id (getPost).
postRouter.get("/:id", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// PATCH /api/post/:id (editPost).
postRouter.patch("/:id", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// DELETE /api/post/:id (deletePost).
postRouter.delete("/:id", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = postRouter
