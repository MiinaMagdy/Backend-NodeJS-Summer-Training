const sendResponse = require('../utils/sendResponse');
const User = require("../models/User")
module.exports = async (req, res, next) => {
    try {
        const user = await User.findById({ _id: req.user._id });
        if (!user) {
            return sendResponse(res, 400, "user id not founded");
        }
        console.log("User:", user);
        if(user.role !== "user") {
            return sendResponse(res, 404, "Only users can make CRUD operations in notes");
        }
        next();
    } catch(err) {
        return sendResponse(res, 500, 'Something went wrong');
     }
}