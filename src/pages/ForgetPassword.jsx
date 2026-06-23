import React from "react";

import { Mail } from "lucide-react";

const ForgotPassword = () => {
  return (
    <section className="pw-forgot-password">
      <div className="pw-forgot-password-card">
        {/* TOP */}
        <div className="pw-forgot-password-top">
          <h1>Forgot Password?</h1>

          <p>
            Enter your email address and we’ll send you a link to reset your
            password.
          </p>
        </div>

        {/* FORM */}
        <form className="pw-forgot-password-form">
          {/* INPUT */}
          <div className="pw-forgot-password-group">
            <label>Email Address</label>

            <div className="pw-forgot-password-input">
              <Mail />

              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          {/* BUTTON */}
          <button type="submit" className="pw-forgot-password-btn">
            Send Reset Link
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
