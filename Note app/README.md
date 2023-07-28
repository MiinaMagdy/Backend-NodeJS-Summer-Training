# Note App 📝

## Introduction 🚀
This is a simple note-taking app that allows users to create, edit, and delete notes. It also grants admins the ability to delete users.

## Features ✨
- Signup as a user or admin ✅
- Users can create, edit, and delete notes 📝✏️❌
- Admin can delete users 👤

## Installation Guide 🛠️
- Clone the repo: `git clone git@github.com:MiinaMagdy/Backend-NodeJS-Summer-Training.git` 📥
- Run `npm install` to install dependencies 📦
- Set up your environment variables in the `.env` file (refer to `.env.example` file) ⚙️

## Usage 🚀
- Run `npm start` to start the server 🏃‍♂️
- Connect to the API using Postman on port 3000 📡

## API Endpoints 📚
#### Users:
| HTTP Method | Endpoint         | Description               |
| ----------- | ---------------- | ------------------------- |
| `POST`      | `/users/signup`  | Signup as a user or admin  |
| `POST`      | `/users/login`   | Login as a user or admin   |
| `DELETE`    | `/users/:id`     | Delete a specific user by id|

#### Notes:
| HTTP Method | Endpoint         | Description               |
| ----------- | ---------------- | ------------------------- |
| `GET`       | `/notes`         | Get all notes             |
| `GET`       | `/notes/:id`     | Get a specific note by id |
| `POST`      | `/notes`         | Create a new note         |
| `POST`      | `/notes/:id`     | Update a specific note by id|
| `DELETE`    | `/notes/:id`     | Delete a specific note by id|
| `DELETE`    | `/notes`         | Delete all notes          |

## Technologies Used 💻
- [NodeJS](https://nodejs.org/en/) - JavaScript runtime environment built on Chrome's V8 JavaScript engine.
- [ExpressJS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [MongoDB](https://www.mongodb.com/) - NoSQL database.
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
- [JWT](https://jwt.io/) - JSON Web Tokens are an open, industry-standard RFC 7519 method for representing claims securely between two parties.
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - A library to help you hash passwords.

## Author 👩‍💻
- [Mina Magdy](https://github.com/MiinaMagdy)

## Acknowledgements 🙏
- **Instructor:** [Eng. Abdelrahman Fawzy](https://github.com/drfawzyofficial)