import React from "react";

const Settings = () => {
  return (
    <section className="pw-settings">
      {/* TOP */}
      <div className="pw-settings-top">
        <h1>Settings</h1>

        <p>Manage your PrimeWears admin preferences and store settings.</p>
      </div>

      {/* CONTENT */}
      <div className="pw-settings-wrapper">
        {/* STORE SETTINGS */}
        <div className="pw-settings-card">
          <div className="pw-settings-card-top">
            <h2>Store Information</h2>

            <p>Update your store details</p>
          </div>

          <div className="pw-settings-grid">
            <div className="pw-settings-group">
              <label>Store Name</label>

              <input type="text" placeholder="PrimeWears" />
            </div>

            <div className="pw-settings-group">
              <label>Support Email</label>

              <input type="email" placeholder="support@primewears.com" />
            </div>

            <div className="pw-settings-group">
              <label>Phone Number</label>

              <input type="text" placeholder="+1 234 567 890" />
            </div>

            <div className="pw-settings-group">
              <label>Currency</label>

              <select>
                <option>USD</option>

                <option>EUR</option>

                <option>GBP</option>

                <option>NGN</option>
              </select>
            </div>
          </div>
        </div>

        {/* PASSWORD */}
        <div className="pw-settings-card">
          <div className="pw-settings-card-top">
            <h2>Security</h2>

            <p>Update your password</p>
          </div>

          <div className="pw-settings-grid">
            <div className="pw-settings-group">
              <label>Current Password</label>

              <input type="password" placeholder="••••••••" />
            </div>

            <div className="pw-settings-group">
              <label>New Password</label>

              <input type="password" placeholder="••••••••" />
            </div>

            <div className="pw-settings-group">
              <label>Confirm Password</label>

              <input type="password" placeholder="••••••••" />
            </div>
          </div>
        </div>

        {/* TOGGLES */}
        <div className="pw-settings-card">
          <div className="pw-settings-card-top">
            <h2>Preferences</h2>

            <p>Manage notifications and store visibility</p>
          </div>

          <div className="pw-settings-toggles">
            <div className="pw-toggle-item">
              <div>
                <h4>Email Notifications</h4>

                <p>Receive updates and alerts</p>
              </div>

              <label className="pw-switch">
                <input type="checkbox" />

                <span className="pw-slider"></span>
              </label>
            </div>

            <div className="pw-toggle-item">
              <div>
                <h4>Store Visibility</h4>

                <p>Make your store public</p>
              </div>

              <label className="pw-switch">
                <input type="checkbox" />

                <span className="pw-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button className="pw-settings-btn">Save Changes</button>
      </div>
    </section>
  );
};

export default Settings;
