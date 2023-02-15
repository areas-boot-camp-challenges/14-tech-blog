// Dependencies.
const commentRouter = require("express").Router()

// Models.
const { Comment } = require("../../../models")

// Search for a comment.
const searchForComment = async (commentId) => {
	const comment = await Comment.findOne({
		where: {
			"commentId": commentId,
		},
	})
	if (comment) {
		return comment.toJSON()
	} else if (!comment) {
		return null
	}
}

// POST /api/post/:postId/comment (addComment).
commentRouter.post("/post/:postId/comment", async (req, res) => {
	try {
		// Prepare the parameters.
		const { comment, commentDate, userId } = req.body
		const postId = req.params.postId
		// Create the comment.
		const newComment = await Comment.create({
			comment,
			commentDate,
			postId,
			userId,
		})
		res.status(200).json(newComment)
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/post/:postId/comments (getPostComments).
commentRouter.get("/post/:postId/comments", async (req, res) => {
	try {
		// Search for all the post’s comments.
		const comments = await Comment.findAll({ where: { "postId": req.params.postId } })
		comments.map(comment => comment.toJSON())
		// Return the post’s comments.
		res.status(200).json(comments)
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET /api/post/:postId/comment/:commentId (getComment).
commentRouter.get("/post/:postId/comment/:commentId", async (req, res) => {
	try {
		// Search for the comment.
		const comment = await searchForComment(req.params.commentId)
		// If the comment’s found, return the comment. Else, return a 404 message.
		if (comment) {
			res.status(200).json(comment)
		} else {
			res.status(404).json(`Comment ${req.params.commentId} not found.`)
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// PATCH /api/post/:postId/comment/:commentId (editComment).
commentRouter.patch("/post/:postId/comment/:commentId", async (req, res) => {
	try {
		// Update the comment.
		await Comment.update(req.body, { where: { "commentId": req.params.commentId }, individualHooks: true })
		// Search for the comment.
		const comment = await searchForComment(req.params.commentId)
		// If the comment’s found, return the comment. Else, return a 404 message.
		if (comment) {
			res.status(200).json(comment)
		} else {
			res.status(404).json(`Comment ${req.params.postId} not found.`)
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// DELETE /api/post/:postId/comment/:commentId (deleteComment).
commentRouter.delete("/post/:postId/comment/:commentId", async (req, res) => {
	try {
		// Search for the comment.
		const comment = await searchForComment(req.params.commentId)
		// If the comment’s found, delete the comment and return a success message. Else, return a 404 message.
		if (comment) {
			await Comment.destroy({ where: { "commentId": req.params.commentId } })
			res.status(200).json(`Comment ${req.params.commentId} deleted.`)
		} else {
			res.status(404).json(`Comment ${req.params.commentId} not found.`)
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = commentRouter
