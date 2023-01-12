// Database.
const sequelize = require("../config/connection")

// Import the models.
const { User, Post, Comment } = require("../models")

// Import the seed data.
const userData = require("./userData.json")
const postData = require("./postData.json")
const commentData = require("./commentData.json")

// Seed the database.
async function seedDatabase() {
	await sequelize.sync({ force: true })
	await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	})
	await Post.bulkCreate(postData, {
		individualHooks: true,
		returning: true,
	})
	await Comment.bulkCreate(commentData, {
		individualHooks: true,
		returning: true,
	})
}

seedDatabase()
