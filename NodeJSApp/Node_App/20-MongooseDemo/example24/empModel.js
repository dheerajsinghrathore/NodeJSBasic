const mongoose = require("mongoose");
let empSchema = new mongoose.Schema({
	_id: Number,
	empName: String,
	empSal: Number,
});
let Emp = new mongoose.model("Emp", empSchema);
module.exports = Emp;
