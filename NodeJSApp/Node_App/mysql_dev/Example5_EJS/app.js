const express = require("express");
const mysql = require("mysql2");

const app = express();
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dheeraj070&",
  database: "companydb",
});

conn.connect((error) => {
  if (error) {
    console.log("Error in connection");
    throw error;
  }
  console.log("Connection successfull");
});

app.get("/api/employees", (req, res) => {
  conn.query("SELECT * FROM emp", (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "Error in fetching data - " + error.message });
    }
    return res.send({ total: results.length, data: results });
  });
});

const server = app.listen(3000, () => {
  console.log(`Server is running on ${server.address().port}`);
});
