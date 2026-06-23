import React, { useState } from "react";

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customers = [
    {
      id: 1,

      name: "Adams Smith",

      email: "adams@gmail.com",

      orders: 12,

      totalSpent: "$1,240",

      address: "14 Allen Avenue, Lagos, Nigeria",

      recentActivity: [
        "Purchased Prime Compression Tee",
        "Ordered Gym Shorts",
        "Updated shipping address",
      ],
    },

    {
      id: 2,

      name: "Sophia Lee",

      email: "sophia@gmail.com",

      orders: 8,

      totalSpent: "$860",

      address: "22 Main Street, New York, USA",

      recentActivity: ["Purchased FlexFit Leggings", "Completed payment"],
    },

    {
      id: 3,

      name: "Michael John",

      email: "michael@gmail.com",

      orders: 5,

      totalSpent: "$420",

      address: "8 Oxford Street, London, UK",

      recentActivity: ["Cancelled an order", "Purchased Prime Tank Top"],
    },
  ];

  return (
    <section className="pw-customers">
      {/* TOP */}
      <div className="pw-customers-top">
        <h1>Customers</h1>

        <p>Manage your customers and view purchase activities</p>
      </div>

      {/* TABLE */}
      <div className="pw-customers-table-wrapper">
        <table className="pw-customers-table">
          <thead>
            <tr>
              <th>Name</th>

              <th>Email</th>

              <th>Orders</th>

              <th>Total Spent</th>

              <th>Profile</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>

                <td>{customer.email}</td>

                <td>{customer.orders}</td>

                <td>{customer.totalSpent}</td>

                <td>
                  <button
                    className="pw-view-customer-btn"
                    onClick={() => setSelectedCustomer(customer)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PROFILE MODAL */}
      <div className={`pw-customer-modal ${selectedCustomer ? "active" : ""}`}>
        <div className="pw-customer-modal-content">
          {selectedCustomer && (
            <>
              {/* TOP */}
              <div className="pw-customer-modal-top">
                <div>
                  <h2>Customer Profile</h2>

                  <p>{selectedCustomer.name}</p>
                </div>

                <button onClick={() => setSelectedCustomer(null)}>✕</button>
              </div>

              {/* INFO */}
              <div className="pw-customer-section">
                <h3>Name</h3>

                <p>{selectedCustomer.name}</p>
              </div>

              <div className="pw-customer-section">
                <h3>Email</h3>

                <p>{selectedCustomer.email}</p>
              </div>

              <div className="pw-customer-section">
                <h3>Orders</h3>

                <p>{selectedCustomer.orders}</p>
              </div>

              <div className="pw-customer-section">
                <h3>Shipping Address</h3>

                <p>{selectedCustomer.address}</p>
              </div>

              <div className="pw-customer-section">
                <h3>Total Spent</h3>

                <p>{selectedCustomer.totalSpent}</p>
              </div>

              {/* RECENT ACTIVITY */}
              <div className="pw-customer-section">
                <h3>Recent Activity</h3>

                <div className="pw-customer-activity">
                  {selectedCustomer.recentActivity.map((activity, index) => (
                    <div key={index} className="pw-activity-item">
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Customers;
