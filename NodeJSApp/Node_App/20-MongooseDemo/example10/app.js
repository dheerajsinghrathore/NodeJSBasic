const connectDB = require("./db");
const Emp = require("./empModel");
const express = require("express");
const app = express();
app.use(express.json());
connectDB();
//get all
app.get("/api/employees", async (req, resp) => {
	try {
		const employees = await Emp.find({}, { __v: 0 });
		return resp.send({ total: employees.length, data: employees });
	} catch (error) {
		console.log(`Error in fetching the rec ${error}`);
		return resp.status(500).send({ error: error });
	}
});
//post
app.post("/api/employees", async (req, resp) => {
	let { id, name, sal } = req.body;
	id = Number(id);
	sal = Number(sal);
	let empObj = new Emp({ _id: id, empName: name, empSal: sal });
	try {
		let obj = await empObj.save();
		return resp.status(201).send({ message: "Emp added!", EmpId: obj._id });
	} catch (error) {
		console.log(`Error in saving the rec ${error}`);
		return resp.status(500).send({ error: error });
	}
});
//get id
app.get("/api/employees/:id", async (req, resp) => {
	const id = Number(req.params.id);

	try {
		const emp = await Emp.find({ _id: id }, { __v: 0 });
		if (emp.length === 0) {
			return resp.status(404).send({ message: `No record of id ${id} found` });
		}
		return resp.send(emp[0]);
	} catch (error) {
		console.log(`Error in fetching the rec ${error}`);
		return resp.status(500).send({ error: error });
	}
});
const server = app.listen(3000, () => {
	console.log(`Server started at http://localhost:/${server.address().port}`);
});
