// Import the models.
const User = require("./User")
const Post = require("./Post")
const Comment = require("./Comment")

// User-to-Post relationship.
User.hasMany(Post, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
})

Post.belongsTo(User, {
	foreignKey: "user_id",
})

// User-to-Comment relationship.
User.hasMany(Comment, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
})

Comment.belongsTo(User, {
	foreignKey: "user_id",
})

// Post-to-Comment relationship.
Post.hasMany(Comment, {
	foreignKey: "post_id",
	onDelete: "CASCADE",
})

Comment.belongsTo(Post, {
	foreignKey: "post_id",
})

module.exports = { User, Post, Comment }
