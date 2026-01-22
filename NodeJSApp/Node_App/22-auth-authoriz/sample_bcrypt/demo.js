const bcrypt = require("bcrypt");

async function genPassword(originalPass) {
  //1. Get the Salt
  const salt = await bcrypt.genSalt(10);
  console.log("salt - ", salt);
  console.log("Original Pass - ", originalPass);
  const hashed = await bcrypt.hash(originalPass, salt);

  return hashed;
}

async function verify(originalPass, hashedPassword) {
  const result = await bcrypt.compare(originalPass, hashedPassword);
  console.log("Result is - ", result);
}

async function run() {
  const hashedPassword = await genPassword("Dheeraj");

  console.log("Hashed Pass - ", hashedPassword);
  verify("Dheeraj", hashedPassword);
}

run();
