import express from 'express';
import { register, login, logout, changePassword, adminLogin, adminRegister } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/password", changePassword);
router.post("/logout", logout);
router.post("/admin-login", adminLogin);
router.post("/admin-register", adminRegister);

export default router;