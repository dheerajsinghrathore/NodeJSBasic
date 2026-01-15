const connectDB = require("./db");
const Emp = require("./empModel");
connectDB();
function fetchFromDB() {
	Emp.find({})
		.then((employees) => {
			console.log(employees);
		})
		.catch((error) => {
			console.log("Unable to fetch the data", error);
		});
}
fetchFromDB();
