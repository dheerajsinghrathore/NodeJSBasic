const mongoose = require("mongoose");
let empSchema = new mongoose.Schema({
	_id: Number,
	empName: {
		type: String,
		required: [true, "empname must be present"],
		minlength: [5, "empname must be atleast of 5 characters"],
	},
	empSal: Number,
});
let Emp = new mongoose.model("Emp", empSchema);
module.exports = Emp;
