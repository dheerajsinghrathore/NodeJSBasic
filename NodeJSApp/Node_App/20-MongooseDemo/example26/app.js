const connectDB = require("./db");
const Emp = require("./empModel");
async function deleteDB(name) {
	try {
		let result = await Emp.findOneAndDelete({ empName: name });
		if (result === null) {
			console.log("Rec not found!");
			return;
		}
		console.log("Record deleted:", result);
	} catch (error) {
		console.log(`Error:${error}`);
	}
}
connectDB();
deleteDB("Deepak");
