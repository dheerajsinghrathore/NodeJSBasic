const connectDB = require("./db");
const Emp = require("./empModel");
async function deleteDB(sal) {
	try {
		let result = await Emp.deleteMany({ empSal: { $gt: sal } });
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
deleteDB(60000);
