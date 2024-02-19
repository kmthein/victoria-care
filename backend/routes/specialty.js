import express from "express"
import { addNewSpecialty, deleteSpecialty, filterSpecialty, getDoctorSpecialty, getSingleSpecialty, getSpecialtyList, searchSpecialtyByName, updateSingleSpecialty } from "../controllers/specialty.js";

const router = express.Router();

router.get('/', getSpecialtyList)
router.post('/search', searchSpecialtyByName)
router.post('/doctor', getDoctorSpecialty)
router.post('/new', addNewSpecialty)
router.post('/delete', deleteSpecialty)
router.post('/edit/:id', getSingleSpecialty)
router.put('/edit/:id', updateSingleSpecialty)
router.post('/', filterSpecialty)

export default router;