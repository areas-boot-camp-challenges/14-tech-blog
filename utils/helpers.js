// Dependencies.
const { DateTime } = require("luxon")

// Handlebars functions.
module.exports = {
	formatDate: (date) => {
		return date.toLocaleString("en-US", DateTime.DATETIME_MED)
	},
}
