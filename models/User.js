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
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		displayName: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		lastName: {
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
			beforeCreate: async (user) => {
				user.password = await bcrypt.hash(user.password, 10)
				return user
			},
			beforeUpdate: async (user) => {
				user.password = await bcrypt.hash(user.password, 10)
				return user
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
