const connectDB = require("./db");
const Emp = require("./empModel");
async function saveToDB() {
	let emp1 = new Emp({ _id: 109, empName: "Rajesh", empSal: 50000 });
	let emp2 = new Emp({ _id: 110, empName: "Raj", empSal: 60000 });
	try {
		let e1 = await emp1.save();
		console.log(`Record saved:${e1}`);
		let e2 = await emp2.save();
		console.log(`Record saved:${e2}`);
	} catch (error) {
		console.log(`Error in saving:${error}`);
	}
}
connectDB();
saveToDB();
