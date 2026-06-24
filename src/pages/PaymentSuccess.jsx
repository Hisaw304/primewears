import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <section className="pw-payment-page">
      <div className="pw-payment-card">
        <div className="pw-payment-icon success">
          <CheckCircle size={80} />
        </div>

        <h1>Payment Successful</h1>

        <p>
          Thank you for shopping with Prime Wear. Your order has been received
          and is now being processed.
        </p>

        <div className="pw-payments-actions">
          <button className="pw-primarys-btn" onClick={() => navigate("/shop")}>
            Continue Shopping
          </button>

          <button className="pw-secondarys-btn" onClick={() => navigate("/")}>
            Back Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
