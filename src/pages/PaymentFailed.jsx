import { XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <section className="pw-payment-page">
      <div className="pw-payment-card">
        <div className="pw-payment-icon failed">
          <XCircle size={80} />
        </div>

        <h1>Payment Failed</h1>

        <p>
          We couldn't process your payment. Please try again or choose another
          payment method.
        </p>

        <div className="pw-payments-actions">
          <button
            className="pw-primarys-btn"
            onClick={() => navigate("/checkout")}
          >
            Try Again
          </button>

          <button
            className="pw-secondarys-btn"
            onClick={() => navigate("/cart")}
          >
            Back To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentFailed;
