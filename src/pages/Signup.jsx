import React from "react";
import { Link } from "react-router-dom";

/* IMAGE */
import signupImage from "../assets/hero3.avif";

const Signup = () => {
  return (
    <section className="pw-signup">
      {/* LEFT */}
      <div className="pw-signup-left">
        <div className="pw-signup-content">
          <span className="pw-signup-subtitle">Join PrimeWears</span>

          <h1 className="pw-signup-title">Create Your Account</h1>

          <p className="pw-signup-text">
            Sign up to explore premium activewear, manage your orders and get
            exclusive product drops.
          </p>

          {/* FORM */}
          <form className="pw-signup-form">
            <div className="pw-signup-input-group">
              <label>Full Name</label>

              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="pw-signup-input-group">
              <label>Email Address</label>

              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="pw-signup-input-group">
              <label>Password</label>

              <input type="password" placeholder="Create password" />
            </div>

            <div className="pw-signup-input-group">
              <label>Confirm Password</label>

              <input type="password" placeholder="Confirm password" />
            </div>

            <button type="submit" className="pw-signup-btn">
              Create Account
            </button>
          </form>

          {/* EXTRA */}
          <div className="pw-signup-extra">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="pw-signup-right">
        <img src={signupImage} alt="" />
      </div>
    </section>
  );
};

export default Signup;
