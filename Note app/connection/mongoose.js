const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set('strictQuery', true);
(async() => {
  try {
     await mongoose.connect(process.env.MONGODB_URI);
     console.log("Connected with mongoDB")
  } catch (err) {
    console.error(err.message);
  }
})()