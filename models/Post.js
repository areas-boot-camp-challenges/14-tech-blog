// Dependencies
const { Model, DataTypes } = require("sequelize")

// Database.
const sequelize = require("../config/connection")

// Set up the model.
class Post extends Model {}

// Define the model.
Post.init(
	{
		post_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		post_title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		post: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		post_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "Post",
	},
)

module.exports = Post
