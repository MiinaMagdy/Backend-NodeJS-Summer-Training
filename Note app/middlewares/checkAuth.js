const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();
const key = process.env.TOKEN_SECRET;

const sendResponse = require("../utils/sendResponse");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, key);
        req.user = decoded;
        next();
    } catch(err) {
        return sendResponse(res, 401, "Authentication is failed");
    }
}