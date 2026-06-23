import React from "react";

import { CreditCard, Plus } from "lucide-react";

const PaymentMethods = () => {
  const cards = [
    {
      brand: "Visa",

      number: "**** **** **** 2481",

      holder: "Adams Smith",

      expiry: "08/28",
    },

    {
      brand: "Mastercard",

      number: "**** **** **** 1021",

      holder: "Adams Smith",

      expiry: "11/27",
    },
  ];

  return (
    <section className="pw-payment-methods">
      {/* TOP */}
      <div className="pw-payment-top">
        <div>
          <h1>Payment Methods</h1>

          <p>Securely manage your saved cards and payment options.</p>
        </div>

        <button className="pw-add-payment-btn">
          <Plus />

          <span>Add New Card</span>
        </button>
      </div>

      {/* CARDS */}
      <div className="pw-payment-grid">
        {cards.map((card, index) => (
          <div key={index} className="pw-payment-card">
            {/* TOP */}
            <div className="pw-payment-card-top">
              <div className="pw-payment-icon">
                <CreditCard />
              </div>

              <span>{card.brand}</span>
            </div>

            {/* NUMBER */}
            <h2>{card.number}</h2>

            {/* DETAILS */}
            <div className="pw-payment-details">
              <div>
                <small>Card Holder</small>

                <p>{card.holder}</p>
              </div>

              <div>
                <small>Expires</small>

                <p>{card.expiry}</p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="pw-payment-actions">
              <button>Edit</button>

              <button>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentMethods;
