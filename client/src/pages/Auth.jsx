import { useState } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar"
import Signup from "./Signup";
import Login from "./Login";
import "./Auth.css";

function Auth() {
  // useState hook to manage whether user is on Signup or Login screen
  // isSignup holds current state
  // setIsSignop updates the state
  // default is true -> Signup page shown initially
  const [isSignup, setIsSignup] = useState(true);

  return (
    <>

      <Background />

      <Navbar />

      <div className="auth-container">

        {/* New Toggle Bar */}
        <div className="toggle-bar-new">
          <input type="checkbox" id="darkmode-toggle"
            checked={!isSignup}
            onChange={() => setIsSignup(!isSignup)}
          />
          <label htmlFor="darkmode-toggle"></label>
        </div>

        {/* Toggle Bar */}{/*     
          <div className="toggle-bar">
          <button
            className={isSignup ? "active" : ""}
            onClick={() => setIsSignup(true)}
          >
            Sign Up
          </button>

          <button
            className={!isSignup ? "active" : ""}
            onClick={() => setIsSignup(false)}
          >
            Login
          </button>
        </div>*/}

        {/* Form Area */}
        <div className="form-wrapper">
          {isSignup ? <Signup /> : <Login />}
        </div>

      </div>
    </>
  );
}

export default Auth;