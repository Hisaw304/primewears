import React from "react";

import { Home, Building2, Plus } from "lucide-react";

const Addresses = () => {
  const addresses = [
    {
      type: "Home Address",

      icon: <Home />,

      address: "2101 4th Avenue North, Birmingham, AL 35203, United States",
    },

    {
      type: "Office Address",

      icon: <Building2 />,

      address:
        "800 Lakeshore Drive, Suite 400, Birmingham, AL 35229, United States",
    },
  ];

  return (
    <section className="pw-customer-addresses">
      {/* TOP */}
      <div className="pw-customer-addresses-top">
        <div>
          <h1>Saved Addresses</h1>

          <p>Manage your shipping and billing addresses.</p>
        </div>

        <button className="pw-add-address-btn">
          <Plus />

          <span>Add New Address</span>
        </button>
      </div>

      {/* GRID */}
      <div className="pw-addresses-grid">
        {addresses.map((item, index) => (
          <div key={index} className="pw-address-card">
            {/* ICON */}
            <div className="pw-address-icon">{item.icon}</div>

            {/* CONTENT */}
            <div className="pw-address-content">
              <h3>{item.type}</h3>

              <p>{item.address}</p>
            </div>

            {/* ACTIONS */}
            <div className="pw-address-actions">
              <button>Edit</button>

              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Addresses;
