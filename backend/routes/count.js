import express from 'express';
import { totalAppointment, totalDoctors, totalSpecialty, totalUser } from '../controllers/count.js';

const router = express.Router();

router.get('/total-doctor', totalDoctors);
router.get('/total-specialty', totalSpecialty);
router.get('/total-user', totalUser);
router.get('/total-appointment', totalAppointment);

export default router;