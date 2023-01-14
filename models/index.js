// Import the models.
const User = require("./definitions/User")
const Post = require("./definitions/Post")
const Comment = require("./definitions/Comment")

// User-to-Post relationship.
User.hasMany(Post, {
	foreignKey: "userId",
	onDelete: "CASCADE",
})

Post.belongsTo(User, {
	foreignKey: "userId",
})

// User-to-Comment relationship.
User.hasMany(Comment, {
	foreignKey: "userId",
	onDelete: "CASCADE",
})

Comment.belongsTo(User, {
	foreignKey: "userId",
})

// Post-to-Comment relationship.
Post.hasMany(Comment, {
	foreignKey: "postId",
	onDelete: "CASCADE",
})

Comment.belongsTo(Post, {
	foreignKey: "postId",
})

module.exports = { User, Post, Comment }
