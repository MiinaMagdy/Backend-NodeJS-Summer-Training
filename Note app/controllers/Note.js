/*
 * This Controller includes the Review Router Handlers and Business Logic
 * Here is the Review GetReviews Controller
 * Here is the Review AddReview Controller
 * Here is the Review DeleteReview Controller
*/

// Models
const Review = require('../models/Review');

// Utils
const sendResponse = require('../utils/sendResponse');

// Methods
const GetReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ });
        return sendResponse(res, 200, "Reviews are retreived", reviews);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const GetReview = async (req, res) => {
    try {
        const _id = req.body._id;
        const review = await Review.findById({ _id: _id });
        return sendResponse(res, 200, "The Review is retreived", review);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const AddReview = async (req, res) => {
    try {
        const data = req.body;
        const review = await new Review(data).save();
        return sendResponse(res, 200, "Review is saved successfully", review);
    } catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}
const DeleteReview = async (req, res) => {
    try {
        const _id = req.body._id;
        await Review.findByIdAndDelete({ _id: _id });
        return sendResponse(res, 200, "The Review is deleted successfully");
    } catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}

// Export 
module.exports = {
    GetReviews,
    GetReview,
    AddReview,
    DeleteReview,
}

