// Dependencies.
const postRouter = require("express").Router()

// Import the models.
// const { Post } = require("../../models")

// POST /api/post (publishPost).
postRouter.post("/post", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/post/:post (getPost).
postRouter.get("/post/:post", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// PATCH /api/post/:post (editPost).
postRouter.patch("/post/:post", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// DELETE /api/post/:post (deletePost).
postRouter.delete("/post/:post", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/posts (getPosts).
postRouter.get("/posts", async (req, res) => {
	try {
		res.status(200).json("So far, so good!")
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = postRouter
