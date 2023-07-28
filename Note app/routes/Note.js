// Packages
const express = require("express");

// Injections
const router = express.Router();

// Controllers
const noteController = require("../controllers/Note");

// Middlewares
const checkAuth = require("../middlewares/checkAuth");
const checkUser = require("../middlewares/checkUser");

// Routes
router.get("/", checkAuth, checkUser, noteController.getAllNotes);
router.get("/:id", checkAuth, checkUser, noteController.getNote);
router.post("/", checkAuth, checkUser, noteController.createNote);
router.post("/:id", checkAuth, checkUser, noteController.updateNote);
router.delete("/", checkAuth, checkUser, noteController.deleteAllNotes);
router.delete("/:id", checkAuth, checkUser, noteController.deleteNote);

// Export
module.exports = router;