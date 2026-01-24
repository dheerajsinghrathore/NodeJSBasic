const connectDB = require("./db.js");
const joi = require("joi");
const userRouter = require("./routes/user.js");
const authRouter = require("./routes/auth.js");
const express = require("express");

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
connectDB();

const server = app.listen(3000, () => {
  console.log("Server started..");
});
