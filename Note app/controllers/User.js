// Packages
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// TOKEN KEY
const key = process.env.TOKEN_SECRET;

// Models
const User = require('../models/User');
const Note = require('../models/Note');

//  Utils
const sendResponse = require('../utils/sendResponse');

// Methods
const signup = async (req, res) => {
    console.log("singup")
    try {
        const { fullname, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return sendResponse(res, 400, "The two passwords are not matched");
        }
        let founded = await User.findOne({ email });
        if (founded) {
            return sendResponse(res, 400, "The email is already exist");
        }

        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await new User(req.body).save();
        const token = jwt.sign({ _id: user._id }, key, { expiresIn: "1h" });
        const result = { token, user };
        return sendResponse(res, 200, "user singed up successfully", result);
    } catch (err) {
        return sendResponse(res, 500, err.message, "Something went wrong");
    }
}
const login = async (req, res) => {
    console.log("login");
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return sendResponse(res, 400, "email and\/or password is missing");
        }
        const user = await User.findOne({ email });
        if (!user) {
            return sendResponse(res, 400, "user not founded");
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return sendResponse(res, 400, "Password is wrong");
        }
        const token = jwt.sign({ _id: user._id }, key, { expiresIn: "1h" });
        const result = { token, user };
        // TODO: store token after login
        return sendResponse(res, 200, "user logged in successfully", result);
    } catch (err) {
        return sendResponse(res, 500, err.message, "Something went wrong");
    }
}
const deleteUser = async (req, res) => {
    console.log("delete user")
    try {
        console.log(req.params);
        const user = await User.findById({ _id: req.params.id });
        if (!user) {
            return sendResponse(res, 400, "No such user id");
        }
        if (user.role === "admin") {
            return sendResponse(res, 400, "admin cannot be deleted");
        }
        await User.deleteOne(user);
        await Note.deleteMany({ userId: req.params.id });
        console.log("User:", user);
        return sendResponse(res, 200, "user deleted successfully", user);
    } catch (err) {
        return sendResponse(res, 500, err.message, "Something went wrong");
    }
}

// Exports
module.exports = {
    signup,
    login,
    deleteUser
}

