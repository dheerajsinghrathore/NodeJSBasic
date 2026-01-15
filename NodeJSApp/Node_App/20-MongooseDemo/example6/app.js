const connectDB = require("./db");
const Emp = require("./empModel");
connectDB();
async function saveToDB(...empArr) {
	try {
		let e = await Emp.create(empArr);
		console.log(`Record saved:${e}`);
	} catch (error) {
		console.log(`Error in saving the object ${err}`);
	}
}
let emp1 = new Emp({ _id: 107, empName: "Dhruv", empSal: 25000.0 });
let emp2 = new Emp({ _id: 108, empName: "Pawan", empSal: 35000.0 });

saveToDB(emp1, emp2);
