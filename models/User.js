// Dependencies
const { Model, DataTypes } = require("sequelize")
const bcrypt = require("bcrypt")

// Database.
const sequelize = require("../config/connection")

// Set up the model.
class User extends Model {
	// Validate the user’s password.
	async validatePassword(password) {
		const validPassword = await bcrypt.compare(password, this.password)
		return validPassword
	}
}

// Define the model.
User.init(
	{
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		display_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8],
			},
		},
	},
	{
		hooks: {
			beforeCreate: async (newUser) => {
				newUser.password = await bcrypt.hash(newUser.password, 10)
				return newUser
			},
			beforeUpdate: async (updatedUser) => {
				updatedUser.password = await bcrypt.hash(updatedUser.password, 10)
				return updatedUser
			},
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "User",
	},
)

module.exports = User
