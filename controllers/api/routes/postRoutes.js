// Dependencies.
const postRouter = require("express").Router()

// Models.
const { Post } = require("../../../models")

// Search for a post.
const searchForPost = async (postId) => {
	const post = await Post.findOne({
		where: {
			"postId": postId,
		},
	})
	if (post) {
		return post.toJSON()
	} else if (!post) {
		return null
	}
}

// POST /api/post (addPost).
postRouter.post("/post", async (req, res) => {
	try {
		// Create the post.
		const newPost = await Post.create(req.body)
		// Return the post.
		const post = await searchForPost(newPost.postId)
		res.status(200).json(post)
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/:userId/posts (getUserPosts).
postRouter.get("/:userId/posts", async (req, res) => {
	try {
		// Search for all posts.
		const posts = await Post.findAll({ where: { "userId": req.params.userId }	})
		posts.map(post => post.toJSON())
		// Return the posts.
		res.status(200).json(posts)
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/post/:postId (getPost).
postRouter.get("/post/:postId", async (req, res) => {
	try {
		// Search for the post.
		const post = await searchForPost(req.params.postId)
		// If the post’s found, return the post. Else, return a 404 message.
		if (post) {
			res.status(200).json(post)
		} else {
			res.status(404).json(`Post ${req.params.postId} not found.`)
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// PATCH /api/post/:postId (editPost).
postRouter.patch("/post/:postId", async (req, res) => {
	try {
		// Update the post.
		await Post.update(req.body, { where: { "postId": req.params.postId }, individualHooks: true })
		// Search for the post.
		const post = await searchForPost(req.params.postId)
		// If the post’s found, return the post. Else, return a 404 message.
		if (post) {
			res.status(200).json(post)
		} else {
			res.status(404).json(`Post ${req.params.postId} not found.`)
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// DELETE /api/post/:postId (deletePost).
postRouter.delete("/post/:postId", async (req, res) => {
	try {
		// Search for the post.
		const post = await searchForPost(req.params.postId)
		// If the post’s found, delete the post and return a success message. Else, return a 404 message.
		if (post) {
			await Post.destroy({ where: { "postId": req.params.postId }	})
			res.status(200).json(`Post ${req.params.postId} deleted.`)
		} else {
			res.status(404).json(`Post ${req.params.postId} not found.`)
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/posts (getPosts).
postRouter.get("/posts", async (req, res) => {
	try {
		// Search for all posts.
		const posts = await Post.findAll()
		posts.map(post => post.toJSON())
		// Return the posts.
		res.status(200).json(posts)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = postRouter
