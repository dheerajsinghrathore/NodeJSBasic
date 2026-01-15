const connectDB = require("./db");
const Emp = require("./empModel");
async function updateDB(id, sal) {
	try {
		let empObj = await Emp.findById(id);
		if (empObj === null) {
			console.log("Record not found!");
			return;
		}
		empObj.empSal = sal;
		let e = await empObj.save();
		console.log(`Record updated:${e}`);
	} catch (error) {
		console.log(`Error:${error}`);
	}
}
connectDB();
updateDB(104, 45000);
