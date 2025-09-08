import "./Login.css";
import Background from "./assets/Background.jpg";
import A2Zlogo from "./assets/A2Zlogo.jpeg";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!email.endsWith("@gmail.com")) newErrors.email = "Only @gmail.com emails allowed";

    if (!password) newErrors.password = "Password is required";
    else if (password.length > 100) newErrors.password = "Use 100 characters or fewer for your password";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful!");
    }
  };

  return (
    <div className="back-page">
      <div className="login-container">
        <div className="login-left">
          <img src={A2Zlogo} alt="A2Z Logo" className="login-logo" />
          <h2 className="login-heading">
            Welcome to SignA2Z: Live ASL Translation & Learning
          </h2>
          <p className="login-subtext">
            Bridging the gap between the Deaf and hearing through real-time ASL translation.
          </p>
        </div>

        <div className="login-right">
          <img src={A2Zlogo} alt="A2Z Logo" className="login-logo-2" />
          <h2 className="login-title">Login</h2>
          <p className="login-description">Please login to continue.</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`login-input ${errors.email ? "error" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <label className="login-label">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`login-input ${errors.password ? "error" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={100}
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <p className="error-text">{errors.password}</p>}

            <button type="submit" className="login-btn">Sign In</button>

            <div className="login-divider">━━━━━━━ or ━━━━━━━</div>



          {/* LOGIN BUTTON FOR GOOGLE */}
            <button type="button" className="login-google-btn">
              <FcGoogle size={20} style={{ marginRight: "8px" }} />
              Sign in with Google
            </button>

          </form>
          <a href="#" className="login-forgot-link">Forgot password?</a>
          <p className="login-signup-text">
            <a href="/signup" className="login-signup-link">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
