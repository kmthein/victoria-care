import express from 'express';
import { getDoctorList } from '../controllers/doctor.js';

const router = express.Router();

router.get('/', getDoctorList)

export default router;