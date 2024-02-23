const router = require("express").Router();

const doctorController = require("../controllers/doctor");

router.get("/doctor", doctorController.getDoctorList);

router.post("/doctor/search", doctorController.searchByName);

router.get("/count/total-doctor", doctorController.totalDoctor);

module.exports = router;