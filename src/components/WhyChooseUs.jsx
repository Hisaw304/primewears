import React from "react";
import { Check, X } from "lucide-react";

const WhyChooseUs = () => {
  const primeWearsFeatures = [
    "Premium Fabric Quality",
    "Sweat-Wicking Technology",
    "Perfect Athletic Fit",
    "Luxury Streetwear Design",
    "Long Lasting Material",
    "Maximum Comfort",
    "Flexible Performance Wear",
    "Modern Minimal Branding",
  ];

  const otherBrandFeatures = [
    { text: "Basic Fabric Quality", available: true },
    { text: "Premium Finishing", available: false },
    { text: "Luxury Design", available: false },
    { text: "Performance Fit", available: false },
    { text: "Limited Comfort", available: true },
    { text: "Long Lasting Quality", available: false },
    { text: "Modern Styling", available: false },
    { text: "Athletic Flexibility", available: false },
  ];

  return (
    <section className="pw-why">
      {/* TOP */}
      <div className="pw-why-top">
        <span className="pw-why-subtitle">Why Choose Us</span>

        <h1 className="pw-why-heading">
          Built Different From Ordinary Activewear
        </h1>

        <div className="pw-why-heading-line"></div>

        <p className="pw-why-text">
          PrimeWears combines performance, comfort and luxury aesthetics to
          create activewear that elevates both your workouts and lifestyle.
        </p>
      </div>

      {/* CARDS */}
      <div className="pw-why-cards">
        {/* PRIMEWEARS CARD */}
        <div className="pw-why-card active">
          <h2>PrimeWears</h2>

          <div className="pw-why-line"></div>

          <div className="pw-why-list">
            {primeWearsFeatures.map((item, index) => (
              <div key={index} className="pw-why-item">
                <div className="pw-check-circle">
                  <Check />
                </div>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* OTHER BRAND */}
        <div className="pw-why-card">
          <h2>Standard Brands</h2>

          <div className="pw-why-line"></div>

          <div className="pw-why-list">
            {otherBrandFeatures.map((item, index) => (
              <div key={index} className="pw-why-item">
                <div
                  className={`pw-status-circle ${
                    item.available ? "available" : "not-available"
                  }`}
                >
                  {item.available ? <Check /> : <X />}
                </div>

                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
