const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Mandatory"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Description is Mandatory"],
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;