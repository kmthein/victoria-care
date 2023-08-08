import express from "express"
import { getDailyAppointment, getMonthlyAppointment, getMonthlyDoctor, getMonthlyNewUser } from "../controllers/report.js";

const router = express.Router();

router.get('/monthly-user', getMonthlyNewUser);
router.get('/monthly-doctor', getMonthlyDoctor);
router.get('/daily-appointment', getDailyAppointment);
router.get('/monthly-appointment', getMonthlyAppointment);

export default router;