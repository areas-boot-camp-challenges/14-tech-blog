// Dependencies
const { Model, DataTypes } = require("sequelize")

// Database.
const sequelize = require("../config/connection")

// Set up the model.
class Comment extends Model {}

// Define the model.
Comment.init(
	{
		post_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		comment_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		comment_date: {
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
		modelName: "Comment",
	},
)

module.exports = Comment
