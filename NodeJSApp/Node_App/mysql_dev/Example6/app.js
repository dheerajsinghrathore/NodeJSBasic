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

app.get("/api/employees/:id", (req, res) => {
  const empId = req.params.id;
  conn.query("SELECT * FROM emp where emp_id=" + empId, (error, results) => {
    if (error) {
      res.render("pages/index.ejs", {
        status: false,
        error: "Error in fetching data - " + error.message,
      });
      return;
    }

    if (results.length === 0) {
      return res.status(404).render("pages/index.ejs", {
        status: false,
        error: "Employee not found",
      });
    }
    return res.status(200).send({
      status: true,
      data: results[0],
    });
  });
});

const server = app.listen(3000, () => {
  console.log(`Server is running on ${server.address().port}`);
});
