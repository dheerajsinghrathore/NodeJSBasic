const mongoose = require("mongoose");
let empSchema = new mongoose.Schema({
	_id: Number,
	empName: { type: String, required: true, minlength: 5 },
	empSal: Number,
});
let Emp = new mongoose.model("Emp", empSchema);
module.exports = Emp;
