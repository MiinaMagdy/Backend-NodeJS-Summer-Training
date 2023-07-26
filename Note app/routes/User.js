// Packages
const express = require("express");

// Callings
const router = express.Router();

// Controllers
const User_Controller = require("../controllers/User");

// Middlewares
const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");

// Routes
router.post("/signup", Admin_Controller.Signup)
router.post("/login", Admin_Controller.Login)
router.put("/changePass", checkAuth, checkAdmin, Admin_Controller.ChangePass)
router.delete("/delete", checkAuth, checkAdmin, Admin_Controller.DeleteAdmin)
// Export
module.exports = router;