const connectDB = require("./db");
const Emp = require("./empModel");
async function updateDB(id, name, sal) {
	try {
		let result = await Emp.updateOne(
			{ _id: id },
			{ $set: { empSal: sal, empName: name } }
		);
		if (result.modifiedCount === 0) {
			console.log("Rec not found!");
			return;
		}
		console.log("Record updated:", result);
	} catch (error) {
		console.log(`Error:${error}`);
	}
}
connectDB();
updateDB(201, "Amitabh", 60000);
