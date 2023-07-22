import express from "express"
import { addNewSpecialty, filterSpecialty, getDoctorSpecialty, getSpecialtyList, searchSpecialtyByName } from "../controllers/specialty.js";

const router = express.Router();

router.get('/', getSpecialtyList)
router.post('/search', searchSpecialtyByName)
router.post('/doctor', getDoctorSpecialty)
router.post('/new', addNewSpecialty)
router.post('/', filterSpecialty)

export default router;