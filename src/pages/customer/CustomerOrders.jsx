import React, { useState } from "react";

import { Eye, X } from "lucide-react";

const CustomerOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "#PW1024",
      date: "05 Mar 2026",
      status: "Shipped",
      total: "$145",

      progress: 2,

      products: [
        {
          name: "Prime Compression Tee",
          qty: 2,
        },

        {
          name: "Flex Joggers",
          qty: 1,
        },
      ],

      shipping: "2101 4th Avenue North, Birmingham, AL 35203",

      tracking: "TRK-20260304-PW",

      payment: "Visa ending in 2481",
    },

    {
      id: "#PW1025",
      date: "11 Mar 2026",
      status: "Delivered",
      total: "$220",

      progress: 3,

      products: [
        {
          name: "Elite Hoodie",
          qty: 1,
        },
      ],

      shipping: "742 Evergreen Terrace, Springfield",

      tracking: "TRK-20260311-PW",

      payment: "Mastercard ending in 1021",
    },
  ];

  return (
    <section className="pw-customer-orders">
      {/* TOP */}
      <div className="pw-customer-orders-top">
        <h1>My Orders</h1>

        <p>Track and manage your PrimeWears orders.</p>
      </div>

      {/* TABLE */}
      <div className="pw-customer-orders-table-wrapper">
        <table className="pw-customer-orders-table">
          <thead>
            <tr>
              <th>Order #</th>

              <th>Date</th>

              <th>Status</th>

              <th>Total</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>

                <td>{order.date}</td>

                <td>
                  <span
                    className={`pw-order-status ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>{order.total}</td>

                <td>
                  <button
                    className="pw-view-order-btn"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <Eye />

                    <span>View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <div
        className={`pw-order-modal ${selectedOrder ? "active" : ""}`}
        onClick={() => setSelectedOrder(null)}
      >
        <div
          className="pw-order-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedOrder && (
            <>
              {/* TOP */}
              <div className="pw-order-modal-top">
                <div>
                  <h2>{selectedOrder.id}</h2>

                  <p>{selectedOrder.date}</p>
                </div>

                <button onClick={() => setSelectedOrder(null)}>
                  <X />
                </button>
              </div>

              {/* PROGRESS */}
              <div className="pw-order-progress">
                <div
                  className={`pw-progress-step ${
                    selectedOrder.progress >= 1 ? "active" : ""
                  }`}
                >
                  Ordered
                </div>

                <div
                  className={`pw-progress-step ${
                    selectedOrder.progress >= 2 ? "active" : ""
                  }`}
                >
                  Shipped
                </div>

                <div
                  className={`pw-progress-step ${
                    selectedOrder.progress >= 3 ? "active" : ""
                  }`}
                >
                  Delivered
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="pw-order-section">
                <h3>Products</h3>

                {selectedOrder.products.map((item, index) => (
                  <div key={index} className="pw-order-product-item">
                    <span>{item.name}</span>

                    <strong>Qty: {item.qty}</strong>
                  </div>
                ))}
              </div>

              {/* SHIPPING */}
              <div className="pw-order-section">
                <h3>Shipping Address</h3>

                <p>{selectedOrder.shipping}</p>
              </div>

              {/* TRACKING */}
              <div className="pw-order-section">
                <h3>Tracking ID</h3>

                <p>{selectedOrder.tracking}</p>
              </div>

              {/* PAYMENT */}
              <div className="pw-order-section">
                <h3>Payment Method</h3>

                <p>{selectedOrder.payment}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomerOrders;
