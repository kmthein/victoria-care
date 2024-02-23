const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const specialtyRoute = require("./routes/specialty");
const doctorRoute = require("./routes/doctor");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.use(cors());

app.use(express.static('public'));

app.use(specialtyRoute);

app.use(doctorRoute);

app.use(authRoute);

app.use(userRoute);

app.listen(8800, () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected to database.");
    }).catch((err) => {
        console.log(err);
    })
})