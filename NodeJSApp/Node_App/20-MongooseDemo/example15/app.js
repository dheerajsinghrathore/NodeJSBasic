const connectDB = require("./db");
const Emp = require("./empModel");
connectDB();
//fetch the rec of first emp earning 75000
async function fetchFromDB() {
	try {
		let employee = await Emp.findOne({ empSal: 75000 });
		console.log(`${employee}`);
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}

//fetch the rec of first emp earning 95000
async function fetchFromDB2() {
	try {
		let employee = await Emp.findOne({ empSal: 95000 });
		if (employee === null) {
			console.log("No emp with sal 95000 found");
		} else {
			console.log(`${employee}`);
		}
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}

//fetch the rec of emp with id 105
async function fetchFromDB3() {
	try {
		let employee = await Emp.findById(105);
		if (employee === null) {
			console.log("No emp with id 105 found");
		} else {
			console.log(`${employee}`);
		}
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}
fetchFromDB3();
