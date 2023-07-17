import express from "express";
import authRoutes from "./routes/auth.js";
import doctorRoutes from "./routes/doctor.js";
import cookieParser from 'cookie-parser';
import specialtyRoutes from "./routes/specialty.js";

export const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.use(cookieParser());

app.use('/api/auth', authRoutes)

app.use('/doctor', doctorRoutes)

app.use('/specialty', specialtyRoutes)

app.listen(8800, () => {
    console.log("Connected");
})