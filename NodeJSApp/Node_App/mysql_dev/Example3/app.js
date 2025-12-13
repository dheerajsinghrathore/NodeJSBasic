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

conn.query("SELECT * FROM emp", (error, results) => {
  if (error) {
    console.log("Error in fetching data - "+{error});
    throw error;
  }
  console.log("Data fetched successfully:", results);
  results.forEach((row) => {
    console.log(`Total records: ${row.id} ${row.name} ${row.age} ${row.salary}`);
    //Destructure
    let {emp_id, emp_name, salary} = row;
    console.log(`Destructured Data: ${emp_id} ${emp_name} ${salary}`);
  });
});

const server = app.listen(3000, () => {
  console.log(`Server is running on ${server.address().port}`);
});
