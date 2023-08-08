import express from 'express';
import { register, login, logout, changePassword, adminLogin } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/password", changePassword);
router.post("/logout", logout);
router.post("/admin-login", adminLogin);

export default router;