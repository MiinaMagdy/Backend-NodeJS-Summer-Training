const sendResponse = require('../utils/sendResponse');
const User = require("../models/User")
module.exports = async (req, res, next) => {
    try {
        // const user = await User.findById({ _id: req.user._id });
        // if(!user) {
        //     return sendResponse(res, 404, "The user is not found");
        // }
        next();
    } catch(err) {
        return sendResponse(res, 500, 'Something went wrong');   
     }
}