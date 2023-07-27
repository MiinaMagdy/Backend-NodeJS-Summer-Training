// Packages
const express = require("express");

// Injections
const router = express.Router();

// Controllers
const noteController = require("../controllers/Note");

// Middlewares
const checkAuth = require("../middlewares/checkAuth");

// Routes
router.get("/", checkAuth, noteController.getAllNotes);
router.get("/:id", checkAuth, noteController.getNote);
router.post("/", checkAuth, noteController.createNote);
router.post("/:id", checkAuth, noteController.updateNote);
router.delete("/", checkAuth, noteController.deleteAllNotes);
router.delete("/:id", checkAuth, noteController.deleteNote);

// Export
module.exports = router;