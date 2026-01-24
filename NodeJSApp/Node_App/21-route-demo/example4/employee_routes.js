const express = require("express");
const employees = require("./employees");
const empRouter = express.Router();

// GET /api/employees
empRouter.get("/", (req, res) => {
  res.send(employees);
});

// GET /api/employees/:employeeId
empRouter.get("/:employeeId", (req, res) => {
  const employeeId = parseInt(req.params.employeeId, 10);
  const employee = employees.find((e) => e.id === employeeId);
  if (employee) {
    res.send(employee);
  } else {
    res.status(400).send({ error: "Employee not found" });
  }
});

// POST /api/employees
empRouter.post("/", (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: "Request body is required" });
  }
  const newEmployee = req.body;
  newEmployee.id = 100 + employees.length + 1; // Simple ID assignment
  employees.push(newEmployee);
  res.status(201).send({
    message: "Employee created",
    employee: newEmployee,
    id: newEmployee.id,
  });
});

module.exports = empRouter;
