const connectDB = require("./db");
const Emp = require("./empModel");
async function updateDB(id, name, amt) {
	try {
		let result = await Emp.updateOne(
			{ _id: id },
			{ $set: { empName: name }, $inc: { empSal: amt } }
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
updateDB(101, "Amritabh", 10000);
