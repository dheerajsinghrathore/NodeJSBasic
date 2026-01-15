const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dheeraj070&",
  database: "companydb",
});
// mysql -u root -p
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
      res.render("pages/index.ejs", {
        status: false,
        error: "Error in fetching data - " + error.message,
      });
      return;
    }
    res.render("pages/index.ejs", {
      status: true,
      total: results.length,
      data: results,
    });
  });
});

const server = app.listen(3000, () => {
  console.log(`Server is running on ${server.address().port}`);
});
