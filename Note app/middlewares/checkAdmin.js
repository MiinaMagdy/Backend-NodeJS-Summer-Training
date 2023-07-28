const sendResponse = require('../utils/sendResponse');
const User = require("../models/User")
module.exports = async (req, res, next) => {
    try {
        const user = await User.findById({ _id: req.user._id });
        if (!user) {
            return sendResponse(res, 400, "admin id not founded");
        }
        console.log("Admin:", user);
        if(user.role !== "admin") {
            return sendResponse(res, 404, "Only admins can delete users");
        }
        next();
    } catch(err) {
        return sendResponse(res, 500, 'Something went wrong');   
     }
}