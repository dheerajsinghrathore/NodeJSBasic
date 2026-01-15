const mongoose = require("mongoose");
let empSchema = new mongoose.Schema({
	_id: Number,
	empName: {
		type: String,
		required: [true, "empname must be present"],
		minlength: [5, "empname must be atleast of 5 characters"],
	},
	empSal: {
		type: Number,
		validate: {
			validator: (sal) => {
				return sal >= 40000 && sal <= 70000;
			},
			message: "Salary must be between 40000 and 70000",
		},
	},
});
let Emp = new mongoose.model("Emp", empSchema);
module.exports = Emp;
