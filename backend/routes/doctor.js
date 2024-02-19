import express from 'express';
import { addNewDoctor, deleteUser, getDoctorList, getSingleDoctor, searchDoctorByName, updateDoctor } from '../controllers/doctor.js';

const router = express.Router();

router.get('/', getDoctorList);
router.post('/', getSingleDoctor);
router.post('/search', searchDoctorByName); 
router.post('/delete', deleteUser);
router.post('/add', addNewDoctor);
router.put('/update', updateDoctor);

export default router;