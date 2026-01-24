const mongoose = require("mongoose");
const joi = require("joi");
const express = require("express");

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
});

function validUser(userObj) {
  const schema = joi.object({
    name: joi.string().min(5).max(50).required(),
    password: joi.string().min(5).max(1024).required(),
    email: joi.string().min(5).max(50).required().email(),
  });
  const { error } = schema.validate(userObj);
  return error;
}

let User = mongoose.model("User", userSchema);
module.exports = { User, validUser };
