// Import Express framework
const express = require("express");
// Create a router instance (used to define routes)
const router = express.Router();
// Import User model (MongoDB schema)
const User = require("../models/User");
// Import bcrypt for password hashing
const bcrypt = require("bcrypt");

// ------------- SIGNUP ---------------
// This route handles user registration
// URL: POST /signup
router.post("/signup", async (req, res) => {
    try {
        // Destructive data sent from frontend (request body)
        const { username, email, password } = req.body;

        // STEP 1: Check if user already exists
        // <add code here>

        // Hash the password before saving (security purpose)
        // 10 = salt rounds (higher = more secure but slower)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object using the model
        const user = new User({
            username,
            email,
            password: hashedPassword // store hashed password, not plain text
        });
        
        // Save user to database (MongoDB)
        await user.save();

        // Send success response
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        // Handle errors (e.g., database issues)
        res.status(500).json({ error: err.message });
    }
});

// Export router so it can be used in server.js
module.exports = router;