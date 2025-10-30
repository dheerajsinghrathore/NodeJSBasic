const express = require('express');
const app = express();
const port = 3000;
const Joi = require('joi');
app.use(express.json());

app.post('/register', (req, res) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email().required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(`Validation error: ${error.details[0].message}`);
  }

  console.log('Registration request received:', value);
  res.send('Registration successful');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});