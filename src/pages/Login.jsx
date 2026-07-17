import React from "react";
import { Link } from "react-router-dom";

/* IMAGE */
import loginImage from "../assets/primehero.png";

const Login = () => {
  return (
    <section className="pw-login">
      {/* LEFT */}
      <div className="pw-login-left">
        <div className="pw-login-content">
          <span className="pw-login-subtitle">Welcome Back</span>

          <h1 className="pw-login-title">Login To PrimeWears</h1>

          <p className="pw-login-text">
            Access your account, manage your orders and explore premium gym
            wears.
          </p>

          {/* FORM */}
          <form className="pw-login-form">
            <div className="pw-login-input-group">
              <label>Email Address</label>

              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="pw-login-input-group">
              <label>Password</label>

              <input type="password" placeholder="Enter your password" />
            </div>

            <button type="submit" className="pw-login-btn">
              Login
            </button>
          </form>

          {/* EXTRA */}
          <div className="pw-login-extra">
            <Link to="/forget-password">Forgot Password?</Link>

            <p>
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="pw-login-right">
        <img src={loginImage} alt="" />
      </div>
    </section>
  );
};

export default Login;
