const connectDB = require("./db");
const Emp = require("./empModel");
connectDB();
//fetch the rec of emp earning  750000
async function fetchFromDB() {
	try {
		let employees = await Emp.find(
			{ empSal: 75000 },
			{ empName: 1, empSal: 1, _id: 0 }
		);
		console.log(`Total employees ${employees.length}`);
		employees.forEach((emp) => {
			console.log(`${emp.empName},${emp.empSal}`);
		});
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}
//fetch the rec of emp earning more than 750000
async function fetchFromDB2() {
	try {
		let employees = await Emp.find(
			{ empSal: { $gt: 75000 } },
			{ empName: 1, empSal: 1, _id: 0 }
		);
		console.log(`Total employees ${employees.length}`);
		employees.forEach((emp) => {
			console.log(`${emp.empName},${emp.empSal}`);
		});
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}
//fetch the rec of emp who have _id less than 105 and they earn more than 40000
async function fetchFromDB3() {
	try {
		let employees = await Emp.find(
			{ _id: { $lt: 105 }, empSal: { $gt: 40000 } },
			{ empName: 1, empSal: 1, _id: 0 }
		);
		console.log(`Total employees ${employees.length}`);
		employees.forEach((emp) => {
			console.log(`${emp.empName},${emp.empSal}`);
		});
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}

//fetch the rec of emp who either have _id less than 105 or they earn more than 40000
async function fetchFromDB4() {
	try {
		let employees = await Emp.find({
			$or: [{ _id: { $lt: 105 } }, { empSal: { $gt: 40000 } }],
		});
		console.log(`Total employees ${employees.length}`);
		employees.forEach((emp) => {
			console.log(`${emp.empName},${emp.empSal}`);
		});
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}
fetchFromDB4();
