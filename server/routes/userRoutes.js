const router = require("express").Router();
const { registerUser } = require("../controllers/userController");

// router.get("/register", registerUser);
router.post("/register", registerUser);

module.exports = router;
