const connectDB = require("./db");
const Emp = require("./empModel");
connectDB();
//fetch the rec of all emp but displ on name and sal
async function fetchFromDB() {
	try {
		let employees = await Emp.find({}).select({ empName: 1, empSal: 1 });

		console.log(`Total employees ${employees.length}`);
		employees.forEach((emp) => {
			console.log(`${emp}`);
		});
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}
//fetch the rec of all emp but displ on name and sal. Do not show _id
async function fetchFromDB2() {
	try {
		let employees = await Emp.find({}).select({
			empName: 1,
			empSal: 1,
			_id: 0,
		});

		console.log(`Total employees ${employees.length}`);
		employees.forEach((emp) => {
			console.log(`${emp}`);
		});
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}

//disp name and sal in asc order of sal
async function fetchFromDB3() {
	try {
		let employees = await Emp.find({})
			.select({
				empName: 1,
				empSal: 1,
				_id: 0,
			})
			.sort({ empSal: 1 });

		console.log(`Total employees ${employees.length}`);
		employees.forEach((emp) => {
			console.log(`${emp}`);
		});
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}
//disp name and sal in asc order of sal and desc of empName
async function fetchFromDB4() {
	try {
		let employees = await Emp.find({})
			.select({
				empName: 1,
				empSal: 1,
				_id: 0,
			})
			.sort({ empSal: 1, empName: -1 });

		console.log(`Total employees ${employees.length}`);
		employees.forEach((emp) => {
			console.log(`${emp}`);
		});
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}
//disp top 2 hhghest paid emp
async function fetchFromDB5() {
	try {
		let employees = await Emp.find({})
			.select({
				empName: 1,
				empSal: 1,
				_id: 0,
			})
			.sort({ empSal: -1 })
			.limit(2);

		console.log(`Total employees ${employees.length}`);
		employees.forEach((emp) => {
			console.log(`${emp}`);
		});
	} catch (error) {
		console.log("Unable to fetch the data", error);
	}
}
fetchFromDB5();
