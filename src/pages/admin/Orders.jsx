import React, { useState } from "react";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "#PW1024",
      customer: "Adams Smith",
      status: "Pending",
      total: "$120",
      payment: "Card Payment",

      address: "14 Allen Avenue, Lagos, Nigeria",

      products: ["Prime Compression Tee x2", "Prime Shorts x1"],
    },

    {
      id: "#PW1025",
      customer: "Sophia Lee",
      status: "Paid",
      total: "$240",
      payment: "PayPal",

      address: "22 Main Street, New York, USA",

      products: ["FlexFit Leggings x2", "Gym Jacket x1"],
    },

    {
      id: "#PW1026",
      customer: "Michael John",
      status: "Cancelled",
      total: "$85",
      payment: "Bank Transfer",

      address: "8 Oxford Street, London, UK",

      products: ["Prime Tank Top x1"],
    },
  ];

  return (
    <section className="pw-orders">
      {/* TOP */}
      <div className="pw-orders-top">
        <h1>Orders</h1>

        <p>Manage customer orders and deliveries</p>
      </div>

      {/* TABLE */}
      <div className="pw-orders-table-wrapper">
        <table className="pw-orders-table">
          <thead>
            <tr>
              <th>Order ID</th>

              <th>Customer</th>

              <th>Status</th>

              <th>Total</th>

              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>

                <td>{order.customer}</td>

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
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ORDER MODAL */}
      <div className={`pw-order-modal ${selectedOrder ? "active" : ""}`}>
        <div className="pw-order-modal-content">
          {selectedOrder && (
            <>
              {/* TOP */}
              <div className="pw-order-modal-top">
                <div>
                  <h2>{selectedOrder.id}</h2>

                  <p>Order Details</p>
                </div>

                <button onClick={() => setSelectedOrder(null)}>✕</button>
              </div>

              {/* CUSTOMER */}
              <div className="pw-order-section">
                <h3>Customer Info</h3>

                <p>{selectedOrder.customer}</p>
              </div>

              {/* ADDRESS */}
              <div className="pw-order-section">
                <h3>Shipping Address</h3>

                <p>{selectedOrder.address}</p>
              </div>

              {/* PRODUCTS */}
              <div className="pw-order-section">
                <h3>Products Bought</h3>

                <div className="pw-order-products">
                  {selectedOrder.products.map((item, index) => (
                    <span key={index} className="pw-order-product">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* PAYMENT */}
              <div className="pw-order-section">
                <h3>Payment Method</h3>

                <p>{selectedOrder.payment}</p>
              </div>

              {/* STATUS */}
              <div className="pw-order-section">
                <h3>Order Status</h3>

                <span
                  className={`pw-order-status ${selectedOrder.status.toLowerCase()}`}
                >
                  {selectedOrder.status}
                </span>
              </div>

              {/* ACTIONS */}
              <div className="pw-order-actions">
                <button className="pw-ship-btn">Mark Shipped</button>

                <button className="pw-deliver-btn">Delivered</button>

                <button className="pw-cancel-btn">Cancel Order</button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Orders;
