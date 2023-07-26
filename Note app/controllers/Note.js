/*
 * This Controller includes the Review Router Handlers and Business Logic
 * Here is the Review GetReviews Controller
 * Here is the Review AddReview Controller
 * Here is the Review DeleteReview Controller
*/

// Models
const Note = require('../models/Note');

// Utils
const sendResponse = require('../utils/sendResponse');

// Methods
const createNote = async (req, res) => {
    try {
        const data = req.body;
        const review = await new Note(data).save;
        return sendResponse(res, 200, "note created successfully");
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const getAllNotes = async (req, res) => {
    try {

    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const getNote = async (req, res) => {
    try {
        const note = await Note.findById({ _id: req.param.id });
        return sendResponse(res, 200, `note of id ${req.param.id}`, note);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const updateNoteTitle = async (req, res) => {
    try {

    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const updateNoteDescription = async (req, res) => {
    try {

    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const deleteAllNotes = async (req, res) => {
    try {

    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const deleteNote = async (req, res) => {
    try {

    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}

// Export 
module.exports = {
    createNote,
    getAllNotes,
    getNote,
    updateNoteTitle,
    updateNoteDescription,
    deleteAllNotes,
    deleteNote
}

