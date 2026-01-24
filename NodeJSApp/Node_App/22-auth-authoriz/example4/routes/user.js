const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const { User, validUser } = require("../models/usermodel");

const router = express.Router();

//Post Route
router.post("/", async (req, res) => {
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

module.exports = router;
