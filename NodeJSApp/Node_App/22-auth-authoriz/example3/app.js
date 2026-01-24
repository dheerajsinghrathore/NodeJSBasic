const connectDB = require("./db.js");
const bcrypt = require("bcrypt");
const joi = require("joi");
const _ = require("lodash");
const express = require("express");
const { User, validUser } = require("./models/userModel.js");

connectDB();
const app = express();
app.use(express.json());

//Post Route
app.post("/api/users", async (req, res) => {
  try {
    //1 Validate
    const error = validUser(req.body);
    //2. If fail
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    //3. search
    let user = await User.findOne({ email: req.body.email });
    //4. if found
    if (user) {
      res.status(400).send("This email is already available");
      return;
    }
    //5. save
    const { email, name, password } = req.body;
    user = new User({ email, name, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    //6. Return obj
    res.send(_.pick(user, [name, email]));
  } catch (ex) {
    res.status(500).send("Something went wrong");
  }
});

app.post("/", async (req, res) => {
  try {
    //1 Validate
    const error = checkUser(req.body);
    //2. If fail
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    //3. Compare
    let user = await User.findOne({ email: req.body.email });
    //4. if not found
    if (!user) {
      res.status(400).send("Invalid UserId and Password");
      return;
    }
    //5. Get Password
    await bcrypt.compare(req.body.password, user.password);
    //6. Fail comparison
    if (!result) {
      res.status(400).send("Invalid UserId and Password");
      return;
    }
    return res.send("Login Successfull!");
  } catch (ex) {
    res.status(500).send("Something went wrong");
  }
});

const server = app.listen(3000, () => {
  console.log("Server started..");
});
