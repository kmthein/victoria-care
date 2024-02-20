import express from "express";
import authRoutes from "./routes/auth.js";
import doctorRoutes from "./routes/doctor.js";
import cookieParser from 'cookie-parser';
import specialtyRoutes from "./routes/specialty.js";
import userRoutes from "./routes/user.js";
import appointRoutes from "./routes/appointment.js";
import reportRoutes from "./routes/report.js";
import countRoutes from "./routes/count.js";
import contactRoutes from "./routes/contact.js";
import fileRoutes from "./routes/storage.js";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.use(express.static('public'));

app.use('/api/auth', authRoutes)

app.use('/doctor', doctorRoutes)

app.use('/specialty', specialtyRoutes)

app.use('/user', userRoutes)

app.use('/appointment', appointRoutes)

app.use('/report', reportRoutes)

app.use('/count', countRoutes)

app.use('/contact', contactRoutes)

app.use('/file', fileRoutes)

app.listen(8800, () => {
    console.log("Connected");
})