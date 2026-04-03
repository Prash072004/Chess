import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/auth/login", form)
      .then(res => {
        alert("Login successful");

        // store token (later)
        localStorage.setItem("token", res.data.token);

        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response?.data || err.message);
      });
  };

  return (
    <div className="form-box">
      <h2>Enter Account</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;