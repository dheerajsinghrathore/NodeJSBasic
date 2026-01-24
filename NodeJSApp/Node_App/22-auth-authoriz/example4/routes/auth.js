const joi = require("joi");
const bcrypt = require("bcrypt");
const { User } = require("../models/usermodel");
const express = require("express");
const router = express.Router();

function checkUser(userObj) {
  const schema = joi.object({
    password: joi.string().min(5).max(1024).required(),
    email: joi.string().min(5).max(50).required().email(),
  });
  const { error } = schema.validate(userObj);
  return error;
}

router.post("/", async (req, res) => {
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

module.exports = router