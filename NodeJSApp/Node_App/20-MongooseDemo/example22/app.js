const connectDB = require("./db");
const Emp = require("./empModel");
async function updateDB(id, name, sal) {
	try {
		let result = await Emp.findOneAndUpdate(
			{ _id: id },
			{ $set: { empSal: sal, empName: name } },
			{ new: true }
		);
		if (result === null) {
			console.log("Rec not found!");
			return;
		}
		console.log("Record updated:", result);
	} catch (error) {
		console.log(`Error:${error}`);
	}
}
connectDB();
updateDB(102, "Sumer", 60000);
