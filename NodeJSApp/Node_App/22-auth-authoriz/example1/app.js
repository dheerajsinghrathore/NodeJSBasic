const connectDB = require("./db");
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
            res.status(400).send(error.details[0].message)
            return;
        }
        //3. search
        let user = await User.findOne({ email: req.body.email })
        //4. if found
        if (user) {
            res.status(400).send("This email is already available")
            return;
        }
        //5. save
        const { email, name, password } = req.body;
        user = new User({ email, name, password });
        await user.save();

        //6. Return obj
        res.send(user);
    } catch (ex) {
        res.status(500).send("Something went wrong");
    }
})

const server = app.listen(3000, () => {
    console.log("Server started..")
})