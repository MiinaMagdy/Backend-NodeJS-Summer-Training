// Packages
const express = require("express");

// Injections
const router = express.Router();

// Controllers
const noteController = require("../controllers/Note");

// Middlewares
const checkAuth = require("../middlewares/checkAuth");

// Routes
router.post("/", checkAuth, noteController.createNote);
router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNote);
router.post("/:id/:title", noteController.updateNoteTitle);
router.post("/:id/:description", noteController.updateNoteDescription);
router.delete("/", noteController.deleteAllNotes);
router.delete("/:id", noteController.deleteNote);

// Export
module.exports = router;