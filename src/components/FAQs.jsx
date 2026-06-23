import React, { useState } from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What makes PrimeWears different?",
      answer:
        "PrimeWears combines luxury aesthetics with premium performance fabrics to deliver gym wears that are stylish, durable and comfortable.",
    },

    {
      question: "Do you offer worldwide shipping?",
      answer:
        "Yes, we ship internationally to selected countries with fast and secure delivery options.",
    },

    {
      question: "Are your products true to size?",
      answer:
        "Our products are designed with an athletic fit. You can check the size guide on each product page for accurate sizing.",
    },

    {
      question: "Can I return or exchange products?",
      answer:
        "Yes, we offer easy returns and exchanges within our return policy period.",
    },

    {
      question: "How long does shipping take?",
      answer:
        "Shipping times depend on your location, but most orders are delivered within 3–7 business days.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pw-faq">
      {/* TOP */}
      <div className="pw-faq-top">
        <span className="pw-faq-subtitle">FAQs</span>

        <h1 className="pw-faq-heading">Frequently Asked Questions</h1>

        <div className="pw-faq-line"></div>

        <p className="pw-faq-text">
          Everything you need to know about PrimeWears products, shipping and
          orders.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="pw-faq-wrapper">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`pw-faq-item ${activeIndex === index ? "active" : ""}`}
          >
            {/* QUESTION */}
            <button
              className="pw-faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <div className="pw-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </div>
            </button>

            {/* ANSWER */}
            <div
              className={`pw-faq-answer ${activeIndex === index ? "open" : ""}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
