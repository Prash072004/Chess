const mongoose = require("mongoose");

// Lets create schema for the table
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true // Remove extra spaces
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Min password length
    }
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);