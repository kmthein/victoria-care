import express from 'express';
import { addAppointment, confirmPayment, getAllAppointments, getAppointmentByUser, getAppointmentDetail, getAppointmentID, getPaymentData, selectAppointment, updatePaymentStatus } from '../controllers/appointment.js';

const router = express.Router();

router.post('/add', addAppointment);
router.get('/get', selectAppointment);
router.post('/payment', confirmPayment);
router.post('/history', getAppointmentByUser);
router.post('/detail', getAppointmentDetail);
router.get('/all', getAllAppointments);
router.post('/get-id', getAppointmentID);
router.post('/update-status', updatePaymentStatus);
router.get('/get-payment', getPaymentData);

export default router;