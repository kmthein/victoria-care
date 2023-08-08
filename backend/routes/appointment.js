import express from 'express';
import { addAppointment, confirmPayment, getAllAppointments, getAppointmentByUser, getAppointmentDetail, selectAppointment } from '../controllers/appointment.js';

const router = express.Router();

router.post('/add', addAppointment);
router.get('/get', selectAppointment);
router.post('/payment', confirmPayment);
router.post('/history', getAppointmentByUser);
router.post('/detail', getAppointmentDetail);
router.get('/all', getAllAppointments);

export default router;