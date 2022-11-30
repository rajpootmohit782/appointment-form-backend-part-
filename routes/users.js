const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

router.get("/a", usersController.getuser);
router.post("/", usersController.insertUser);
router.delete("/delete/:id", usersController.deleteUser);

module.exports = router;
