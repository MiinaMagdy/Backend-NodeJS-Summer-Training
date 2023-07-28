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
    console.log("update note");
    try {
        console.log(req.params);
        const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });
        if (!note) {
            return sendResponse(res, 400, "No such note id");
        }
        if (!req.body.title && !req.body.description) {
            return sendResponse(res, 400, "Provide a title or a description to update the note");
        }
        const updatedNote = note;
        updatedNote.set(req.body);
        console.log("Updated note:", updatedNote);
        const result = await Note.findOneAndUpdate({ _id: req.params.id, userId: req.user._id }, updatedNote, { new: true });
        return sendResponse(res, 200, "note updated successfully", result);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const deleteAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user._id });
        if (notes.length == 0) {
            return sendResponse(res, 400, "there are no notes to be deleted");
        }
        await Note.deleteMany({ userId: req.user._id });
        return sendResponse(res, 200, "all notes deleted successfully", notes);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const deleteNote = async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });
        if (!note) {
            return sendResponse(res, 400, "No such note id");
        }
        await Note.deleteOne({ _id: req.params.id, userId: req.user._id });
        return sendResponse(res, 200, "a note deleted successfully", note);
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

