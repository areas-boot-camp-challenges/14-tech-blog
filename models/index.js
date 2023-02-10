// Models.
const User = require("./definitions/User")
const Post = require("./definitions/Post")
const Comment = require("./definitions/Comment")

// User-to-Post relationships.
User.hasMany(Post, {
	as: "post",
	foreignKey: "userId",
	onDelete: "CASCADE",
})

Post.belongsTo(User, {
	as: "user",
	foreignKey: "userId",
})

// User-to-Comment relationships.
User.hasMany(Comment, {
	as: "comment",
	foreignKey: "userId",
	onDelete: "CASCADE",
})

Comment.belongsTo(User, {
	as: "user",
	foreignKey: "userId",
})

// Post-to-Comment relationships.
Post.hasMany(Comment, {
	as: "comment",
	foreignKey: "postId",
	onDelete: "CASCADE",
})

Comment.belongsTo(Post, {
	as: "post",
	foreignKey: "postId",
})

module.exports = { User, Post, Comment }
