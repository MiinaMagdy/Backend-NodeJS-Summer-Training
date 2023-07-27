/*
 * This Controller includes the Admin Router Handlers and Business Logic
 * Here is the Admin Signup Controller
 * Here is the Admin Login Controller
 * Here is the Admin ChangePass Controller
*/

// Packages
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
// TOKEN KEY
const key = process.env.TOKEN_SECRET;

// Models
const User = require('../models/User');

//  Utils
const sendResponse = require('../utils/sendResponse');

// Methods
const Signup = async (req, res) => {
    try {

        const { fullname, email, password, confirmPassword } = req.body;

        if (fullname.length < 6)
            return sendResponse(res, 400, "Fullname must be more than 6 chars");

        if (!email.match(/^\w+([-+.]\w+)*@((yahoo|gmail)\.com)$/))
            return sendResponse(res, 400, "Email must be gmail or yahoo");

        if (password.length < 6)
            return sendResponse(res, 400, "Password must be more than 6 chars");

        if (password !== confirmPassword) {
            return sendResponse(res, 400, "The two passwords are not matched");
        }

        // The Admin is found in the Admin Collection
        let founded = await User.findOne({ email: email });
        if (founded) {
            return sendResponse(res, 409, "Email is already found");
        }

        // The Admin is not found in the Admin Collection
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await new User(req.body).save();
        const token = jwt.sign({ _id: user._id }, key);
        const result = { token: token, user: user }
        return sendResponse(res, 201, "Account has been created Successfully", result);

    } catch (err) {
        console.log(err.message)
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }

}
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return sendResponse(res, 400, 'All the fields are mandatory');
        }
        var admin = await User.findOne({ email: email })
        if (!admin) {
            return sendResponse(res, 401, 'The Email is not exist');
        }
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return sendResponse(res, 401, 'Password is wrong');
        }
        const token = jwt.sign({ _id: admin._id }, key);
        const result = { token: token, admin: admin };
        return sendResponse(res, 200, 'Login is success', result);
    } catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}
const DeleteAdmin = async (req, res) => {
    try {
        await User.findByIdAndDelete({ _id: req.user._id });
        return sendResponse(res, 200, 'The User is deleted successfully');
    } catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}
const ChangePass = async (req, res) => {
    try {
        var { oldpassword, newpassword, confirmpassword } = req.body;

        if (oldpassword.length < 6 || newpassword.length < 6 || confirmpassword.length < 6)
            return sendResponse(res, 400, "All passwords must be at least 6 characters");

        const user = await User.findById({ _id: req.user._id });

        const result = await bcrypt.compare(oldpassword, user.password);

        if (!result)
            return sendResponse(res, 400, "The old password is wrong");


        if (newpassword !== confirmpassword)
            return sendResponse(res, 400, "The two passwords are not identical");

        password = await bcrypt.hash(newpassword, 10);
        await User.findByIdAndUpdate({ _id: user._id }, { password: password }, { new: true });

        return sendResponse(res, 200, "Password has been updated successfully");

    } catch (err) {
        console.log(err.message)
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}
const signup = async (req, res) => {
    console.log("singup")
    try {
        const { fullname, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return sendResponse(res, 400, "The two passwords are not matched");
        }
        let founded = await User.findOne({ email: email });
        if (founded) {
            return sendResponse(res, 400, "The email is already exist");
        }
        
        const user = await new User(req.body).save();
        const token = jwt.sign({ _id: user._id }, key);
        const result = { token, user };
        return sendResponse(res, 200, "user singed up successfully", result);
    } catch (err) {
        return sendResponse(res, 500, err.message, "Something went wrong");
    }
}
const login = async (req, res) => {
    console.log("login");
    try {
        
        return sendResponse(res, 200, "user logged in successfully", "yes");
    } catch (err) {
        return sendResponse(res, 500, err.message, "Something went wrong");
    }
}
const deleteUser = async (req, res) => {
    console.log("delete user")
    try {
        return sendResponse(res, 200, "user deleted successfully");
    } catch (err) {
        return sendResponse(res, 500, err.message, "Something went wrong");
    }
}
const deleteAllUsers = async (req, res) => {
    console.log("delete all users")
    try {
        return sendResponse(res, 200, "users deleted successfully");
    } catch (err) {
        return sendResponse(res, 500, err.message, "Something went wrong");
    }
}

// Exports
module.exports = {
    signup,
    login,
    deleteUser,
    deleteAllUsers
}

