// Import Express framework
const express = require("express")
// Import MongoDB ODM (to interact with DB)
const mongoose = require("mongoose")
// Import cors which allows requests from frontend (different origin)
const cors = require("cors")

// Load environment variables from .env file
require("dotenv").config();

// Import authentication routes (signup/login routes)
const authRoutes = require("./routes/auth");

// Create Express app
const app = express()
// Parse imcoming JSON requests (req.body)
app.use(express.json())
// Enable CORS (so frontend can call backend API)
app.use(cors())

// -------------- Database Connection --------------
// Connect to MongoDB suing connection string from .env
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// -------------- Routes -------------------

// All auth-related routes will start with /api/auth
// Example: POST /api/auth/signup
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    console.log("server is running")
})