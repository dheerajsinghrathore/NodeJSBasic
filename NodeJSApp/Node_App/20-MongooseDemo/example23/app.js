const connectDB = require("./db");
const Emp = require("./empModel");
async function updateDB(id, amt) {
	try {
		let result = await Emp.updateMany(
			{ _id: { $gt: id } },
			{ $inc: { empSal: amt } }
		);
		if (result.modifiedCount === 0) {
			console.log("Rec not found!");
			return;
		}
		console.log("Record updated:", result.modifiedCount);
	} catch (error) {
		console.log(`Error:${error}`);
	}
}
connectDB();
updateDB(104, 5000);
