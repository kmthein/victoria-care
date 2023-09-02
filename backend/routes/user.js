import express from "express";
import { deleteUser, getAdmin, getAllUsers, getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get('/patients', getAllUsers);
router.post('/patients', getUser);
router.post('/admin', getAdmin);
router.put('/update', updateUser);
router.post('/patients/delete', deleteUser);

export default router;