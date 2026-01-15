const Emp = require("./empModel");

async function fetchAllEmpFromDB() {
	try {
		const employees = await Emp.find({}, { __v: 0 });
		return { total: employees.length, data: employees };
	} catch (error) {
		throw error;
	}
}
async function saveEmpToDB(empObj) {
	try {
		let obj = await empObj.save();
		return obj;
	} catch (error) {
		throw error;
	}
}
async function fetchEmpById(id) {
	try {
		const emp = await Emp.find({ _id: id }, { __v: 0 });
		return emp;
	} catch (error) {
		throw error;
	}
}
module.exports = { fetchAllEmpFromDB, saveEmpToDB, fetchEmpById };
