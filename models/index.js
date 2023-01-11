// Import the models.
const User = require("./User")
const Post = require("./Post")
const Comment = require("./Comment")

// User-to-Post relationship.
User.hasMany(Post, {
	foreignKey: "userId",
	onDelete: "CASCADE",
})

Post.belongsTo(User, {
	foreignKey: "postAuthorId",
})

// User-to-Comment relationship.
User.hasMany(Comment, {
	foreignKey: "userId",
	onDelete: "CASCADE",
})

Comment.belongsTo(User, {
	foreignKey: "commentAuthorId",
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
