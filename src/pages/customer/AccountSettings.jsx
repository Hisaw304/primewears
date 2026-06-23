import React from "react";

const AccountSettings = () => {
  return (
    <section className="pw-account-settings">
      {/* TOP */}
      <div className="pw-account-settings-top">
        <h1>Account Settings</h1>

        <p>
          Update your personal information and manage your account preferences.
        </p>
      </div>

      {/* FORM */}
      <form className="pw-account-settings-form">
        {/* GRID */}
        <div className="pw-account-settings-grid">
          {/* FIRST NAME */}
          <div className="pw-account-group">
            <label>First Name</label>

            <input type="text" placeholder="Adams" />
          </div>

          {/* LAST NAME */}
          <div className="pw-account-group">
            <label>Last Name</label>

            <input type="text" placeholder="Smith" />
          </div>

          {/* EMAIL */}
          <div className="pw-account-group">
            <label>Email Address</label>

            <input type="email" placeholder="adams@example.com" />
          </div>

          {/* PHONE */}
          <div className="pw-account-group">
            <label>Phone Number</label>

            <input type="text" placeholder="+1 234 567 890" />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="pw-account-password-area">
          <h3>Change Password</h3>

          <div className="pw-account-settings-grid">
            <div className="pw-account-group">
              <label>Current Password</label>

              <input type="password" placeholder="Current password" />
            </div>

            <div className="pw-account-group">
              <label>New Password</label>

              <input type="password" placeholder="New password" />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button type="submit" className="pw-account-save-btn">
          Save Changes
        </button>
      </form>
    </section>
  );
};

export default AccountSettings;
