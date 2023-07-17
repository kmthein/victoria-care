import express from "express"
import { filterSpecialty, getSpecialtyList, searchSpecialtyByName } from "../controllers/specialty.js";

const router = express.Router();

router.get('/', getSpecialtyList)
router.post('/search', searchSpecialtyByName)
router.post('/', filterSpecialty)

export default router;