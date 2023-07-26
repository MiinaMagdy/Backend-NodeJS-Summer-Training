// Including Express Framework
const express = require("express")
const app = express()

// Including Morgan Package
// const morgan = require("morgan")
// app.use(morgan("dev"))

// Including Cors Package
// const cors = require("cors")
// app.use(cors())

// Setting up the bodyParser
// const bodyParser = require("body-parser")
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// Connection to MongoDB
require("./connection/mongoose")

// Routes
const User = require("./routes/User");
const Note = require("./routes/Note");

// Injections
app.use("/users", User);
app.use("/notes", Note);

// The NodeJS App is running on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Running on Port: ${ port }`)
});