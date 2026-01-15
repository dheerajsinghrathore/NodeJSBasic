const connectDB = require("./db");
const Emp = require("./empModel");
connectDB();
async function fetchFromDB() {
	try {
		let employees = await Emp.find({});
		console.log(employees);
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}
fetchFromDB();
