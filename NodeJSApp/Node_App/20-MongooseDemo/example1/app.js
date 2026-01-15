const mongoose = require("mongoose");
mongoose
	.connect("mongodb://127.0.0.1:27017/testdbms")
	.then((conn) => {
		console.log("connection done!");
		console.log(`Connection details:${conn.connection.host}`);
	})
	.catch((err) => {
		console.log("Error:Cannot connect to the DB ");
		console.log("Details:", err);
	});
