// Dependencies
const { Model, DataTypes } = require("sequelize")

// Database.
const sequelize = require("../../config/connection")

// Set up the model.
class Comment extends Model {}

// Define the model.
Comment.init(
	{
		commentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		postId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		commentAuthorId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		commentDate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: false,
		modelName: "Comment",
		tableName: "Comment",
	},
)

module.exports = Comment
