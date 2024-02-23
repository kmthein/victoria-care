const router = require("express").Router();

const specialtyController = require("../controllers/specialty");

router.get("/specialty", specialtyController.getSpecialtyList);

router.post("/specialty", specialtyController.filterSpecialty);

router.post("/specialty/search", specialtyController.searchByName);

module.exports = router;