const router = require("express").Router();

const authController = require("../controllers/auth");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/admin-login", authController.adminLogin);

module.exports = router;