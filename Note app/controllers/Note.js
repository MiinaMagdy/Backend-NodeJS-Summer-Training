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
        data.userId = req.user._id;
        console.log(data);
        const note = await new Note(data).save();
        return sendResponse(res, 200, "note created successfully", note);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user._id });
        return sendResponse(res, 200, "all notes sent successfully", notes);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const getNote = async (req, res) => {
    try {
        console.log(req.params);
        const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });
        if (!note) {
            return sendResponse(res, 400, "No such note id");
        }
        return sendResponse(res, 200, `Note of id ${req.params.id}`, note);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const updateNote = async (req, res) => {
    try {
        return sendResponse(res, 200, "note title updated successfully", req);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const deleteAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user._id });
        return sendResponse(res, 200, "all notes deleted successfully", notes);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const deleteNote = async (req, res) => {
    try {
        return sendResponse(res, 200, "a note deleted successfully", req);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}

// Export 
module.exports = {
    createNote,
    getAllNotes,
    getNote,
    updateNote,
    deleteAllNotes,
    deleteNote
}

