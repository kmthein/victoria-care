const router = require("express").Router();

const userController = require("../controllers/user");

router.put("/user/update", userController.updateUser);

router.get("/all-users", userController.totalUser);

router.get("/user/:id", userController.getUserDetail);

module.exports = router;
