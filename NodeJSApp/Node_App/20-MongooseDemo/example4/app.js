const connectDB = require("./db");
const Emp = require("./empModel");
connectDB();
function saveToDB(empObj) {
	empObj
		.save()
		.then((emp) => {
			console.log(`Emp saved ${emp}`);
		})
		.catch((err) => {
			console.log(`Error is saving the rec in DB ${err}`);
		});
}
let emp1 = new Emp({ _id: 103, empName: "Ravi", empSal: 34500.0 });
let emp2 = new Emp({ _id: 104, empName: "Deepak", empSal: 56000.0 });

saveToDB(emp1);
saveToDB(emp2);
