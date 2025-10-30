const express = require('express');
const app = express();
const port = 3000;
const Joi = require('joi');
app.use(express.json());

app.post('/api/product', (req, res) => {
    const product = req.body;

    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        price: Joi.number().positive().required(),
        category: Joi.string().min(3).max(30).required()
    });
    
    const { error, value } = schema.validate(product);
    if (error) {
        return res.status(400).send(`Validation error: ${error.details[0].message}`);
    }

    console.log('Product added:', value);
    res.send('Product added successfully');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
