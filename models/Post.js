// Dependencies
const { Model, DataTypes } = require("sequelize")

// Database.
const sequelize = require("../config/connection")

// Set up the model.
class Post extends Model {}

// Define the model.
Post.init(
	{
		postId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		postTitle: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		post: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		postDate: {
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
