import { useState } from "react";
import { useCart } from "../context/CartContext";
import paystackLogo from "../assets/paystack.png";
import stripeLogo from "../assets/stripe.png";

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();

  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? cartItems : cartItems.slice(0, 3);

  const [paymentMethod, setPaymentMethod] = useState("paystack");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const freeShippingThreshold = 150;

  const shippingFee = cartTotal >= freeShippingThreshold ? 0 : 12;

  const tax = cartTotal * 0.05;

  const grandTotal = cartTotal + shippingFee + tax;

  const progress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);

  const handlePayment = async () => {
    setFormError("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.state ||
      !formData.city ||
      !formData.address
    ) {
      setFormError("Please complete all required fields before proceeding.");
      return;
    }

    const orderData = {
      customer: formData,

      items: cartItems,

      subtotal: cartTotal,

      shipping: shippingFee,

      tax,

      total: grandTotal,

      paymentMethod,
    };

    try {
      setLoading(true);

      if (paymentMethod === "paystack") {
        const response = await fetch("/api/paystack-init", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });

        const data = await response.json();

        window.location.href = data.authorization_url;
      }

      if (paymentMethod === "stripe") {
        const response = await fetch("/api/stripe-checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });

        const data = await response.json();

        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);

      setFormError("Unable to start payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pw-checkout-page">
      <div className="pw-checkout-container">
        {/* LEFT */}

        <div className="pw-checkout-form-side">
          <h1 className="pw-checkout-title">Shipping Information</h1>

          <form className="pw-checkout-form">
            <div className="pw-form-grid">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>

              <option value="Nigeria">Nigeria</option>

              <option value="United States">United States</option>

              <option value="United Kingdom">United Kingdom</option>
            </select>

            <div className="pw-form-grid">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
            />

            <input
              type="text"
              name="zipCode"
              placeholder="Postal Code"
              value={formData.zipCode}
              onChange={handleChange}
            />

            <textarea
              rows="5"
              name="notes"
              placeholder="Order Notes (Optional)"
              value={formData.notes}
              onChange={handleChange}
            />

            <div className="pw-payment-methods">
              <h3>Choose Payment Method</h3>

              <label
                className={`pw-payment-option ${
                  paymentMethod === "paystack" ? "active" : ""
                }`}
              >
                <div className="pw-payment-left">
                  <input
                    type="radio"
                    value="paystack"
                    checked={paymentMethod === "paystack"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />

                  <img
                    src={paystackLogo}
                    alt="Paystack"
                    className="pw-payment-logo"
                  />

                  <div>
                    <h4>Paystack</h4>

                    <p>Cards, Bank Transfer, USSD & Mobile Money</p>
                  </div>
                </div>

                <span className="pw-payment-check">✓</span>
              </label>

              <label
                className={`pw-payment-option ${
                  paymentMethod === "stripe" ? "active" : ""
                }`}
              >
                <div className="pw-payment-left">
                  <input
                    type="radio"
                    value="stripe"
                    checked={paymentMethod === "stripe"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />

                  <img
                    src={stripeLogo}
                    alt="Stripe"
                    className="pw-payment-logo"
                  />

                  <div>
                    <h4>Stripe</h4>

                    <p>Visa, Mastercard, Apple Pay & More</p>
                  </div>
                </div>

                <span className="pw-payment-check">✓</span>
              </label>
            </div>
            {formError && <div className="pw-form-error">{formError}</div>}

            <button
              type="button"
              className="pw-payment-btn"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? "Processing..." : "Continue To Payment"}
            </button>
          </form>
        </div>

        {/* RIGHT */}

        <div className="pw-checkout-summary">
          <h2>Order Summary</h2>

          <div className="pw-summary-products">
            {visibleProducts.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="pw-summary-product"
              >
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>

                  <p>Qty: {item.quantity}</p>

                  <span>${item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {cartItems.length > 3 && (
            <button
              className="pw-show-more-products"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : `Show ${cartItems.length - 3} More`}
            </button>
          )}

          <div className="pw-checkout-totals">
            {cartTotal < freeShippingThreshold && (
              <>
                <p className="pw-free-shipping-message">
                  Add ${(freeShippingThreshold - cartTotal).toFixed(2)} more to
                  qualify for FREE shipping.
                </p>

                <div className="pw-shipping-progress">
                  <div
                    className="pw-shipping-progress-fill"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </>
            )}

            {cartTotal >= freeShippingThreshold && (
              <p className="pw-free-shipping-success">
                🎉 You qualify for FREE shipping!
              </p>
            )}

            <div className="pw-total-row">
              <span>Subtotal</span>

              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="pw-total-row">
              <span>Shipping</span>

              <span>
                {shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`}
              </span>
            </div>

            <div className="pw-total-row">
              <span>Estimated Tax</span>

              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="pw-total-row pw-grand-total">
              <span>Total</span>

              <span>${grandTotal.toFixed(2)}</span>
            </div>

            <p className="pw-checkout-note">
              Taxes and shipping are calculated before payment confirmation.
            </p>
          </div>

          <div className="pw-secure-checkout">🔒 Secure Checkout</div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
