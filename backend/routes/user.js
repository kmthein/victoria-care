import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get('/patients', getAllUsers);
router.post('/patients', getUser);
router.put('/update', updateUser);
router.post('/patients/delete', deleteUser);

export default router;