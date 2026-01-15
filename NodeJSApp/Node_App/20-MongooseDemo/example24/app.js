const connectDB = require("./db");
const Emp = require("./empModel");
async function deleteDB(id) {
	try {
		let result = await Emp.deleteOne({ _id: id });
		if (result.deletedCount === 0) {
			console.log("Rec not found!");
			return;
		}
		console.log("Record deleted:", result.deletedCount);
	} catch (error) {
		console.log(`Error:${error}`);
	}
}
connectDB();
deleteDB(9);
