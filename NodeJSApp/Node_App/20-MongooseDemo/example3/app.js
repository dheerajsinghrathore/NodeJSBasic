const connectDB = require("./db");
const Emp = require("./empModel");
connectDB();

let emp1 = new Emp({ _id: 101, empName: "Amit", empSal: 50000.0 });
let emp2 = new Emp({ _id: 102, empName: "Sumit", empSal: 40000.0 });
emp1
	.save()
	.then((emp) => {
		console.log(`Emp saved ${emp}`);
	})
	.catch((err) => {
		console.log(`Error is saving the rec in DB ${err}`);
	});
emp2
	.save()
	.then((emp) => {
		console.log(`Emp saved ${emp}`);
	})
	.catch((err) => {
		console.log(`Error is saving the rec in DB ${err}`);
	});
