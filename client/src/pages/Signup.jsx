import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Signup.css";

function Signup() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // stops page reload

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        axios.post("http://localhost:5000/api/auth/signup", {
            username: form.username,
            email: form.email,
            password: form.password
        })
            .then(result => console.log(result))
            .catch(err => console.log(err));
        /* Pro Tip
        .then(result => {
            console.log("SUCCESS:", result.data);
        })
            .catch(err => {
                console.log("ERROR:", err.response?.data || err.message);
        });
        */

        console.log(form);
        // 👉 connect backend here later
    };
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Create Account</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Sign Up</button>
                </form>

                <p>
                    Already have an account? <Link to="/Login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;