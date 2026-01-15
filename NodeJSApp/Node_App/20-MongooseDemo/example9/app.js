const connectDB = require("./db");
const Emp = require("./empModel");
connectDB();
async function fetchFromDB() {
	try {
		let employees = await Emp.find({}, { empName: 1, empSal: 1, _id: 0 });
		console.log(`Total employees ${employees.length}`);
		employees.forEach((emp) => {
			console.log(`${emp.empName},${emp.empSal}`);
		});
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}
fetchFromDB();
