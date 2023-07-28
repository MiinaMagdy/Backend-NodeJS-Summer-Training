// Packages
const express = require("express");

// Callings
const router = express.Router();

// Controllers
const userController = require("../controllers/User");

// Middlewares
const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");

// Routes
router.post("/signup", userController.signup)
router.post("/login", userController.login)
router.delete("/:id", checkAuth, checkAdmin, userController.deleteUser);

// Export
module.exports = router;