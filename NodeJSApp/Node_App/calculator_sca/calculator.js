const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, resp) => {
	resp.sendFile(__dirname + "/index.html");
});
app.get("/conversion", (req, resp) => {
	resp.sendFile(__dirname + "/conversion.html");
});

app.post("/", (req, resp) => {
	let x = Number(req.body.fno);
	let y = Number(req.body.sno);
	let z = x + y;
	resp.send(`Nos are <b>${x}</b> and <b>${y}</b><br>Their sum is ${z}`);
});

app.post("/conversion", (req, resp) => {
	let { amount, to } = req.body;
	amount = Number(amount);
	let convertedAmount = 0;
	let currName = "";
	switch (to) {
		case "d":
			currName = "Dollar";
			convertedAmount = amount / 88.28;
			break;
		case "p":
			currName = "Pound";
			convertedAmount = amount / 117.96;
			break;
		case "e":
			currName = "Euro";
			convertedAmount = amount / 102.12;
			break;
	}
	let str = "<h1>After Conversion</h1>";
	str =
		str +
		`<b>${amount}</b> Rupees = <b>${convertedAmount.toFixed(
			2
		)}</b> ${currName}`;
	resp.send(str);
});

const server = app.listen(3000, () => {
	console.log(`Server waiting at ${server.address().port}`);
});
