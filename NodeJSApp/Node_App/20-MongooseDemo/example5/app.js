const connectDB = require("./db");
const Emp = require("./empModel");
connectDB();
async function saveToDB(empObj) {
	try {
		let e = await Emp.create(empObj);
		console.log(`Record saved:${e}`);
	} catch (error) {
		console.log(`Error in saving the object ${err}`);
	}
}
let emp1 = new Emp({ _id: 105, empName: "Varun", empSal: 80000.0 });
let emp2 = new Emp({ _id: 106, empName: "Arun", empSal: 75000.0 });

saveToDB(emp1);
saveToDB(emp2);
