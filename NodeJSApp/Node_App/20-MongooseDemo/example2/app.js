const mongoose = require("mongoose");
async function connectDB() {
	try {
		const conn = await mongoose.connect("mongodb://127.0.0.1:27017/testdbms");
		console.log("Connection Done!");
	} catch (err) {
		console.log("Error in DB Connection");
	}
}
connectDB();
console.log("Hi");
