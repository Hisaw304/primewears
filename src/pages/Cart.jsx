import { useState, useMemo, useEffect } from "react";
import api from "../services/api";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductDrawer from "../components/productslider/ProductDrawer";

const Cart = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const allProducts = products;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const recommendedProducts = useMemo(() => {
    return [...allProducts].sort(() => Math.random() - 0.5).slice(0, 4);
  }, [allProducts]);
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="pw-cart-page">
        <div className="pw-cart-empty">
          <h2>Your Cart Is Empty</h2>

          <p>Looks like you haven't added any products yet.</p>

          <button
            className="pw-continue-shopping"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }
  const freeShippingThreshold = 100000; // ₦100,000

  const shippingFee = cartTotal >= freeShippingThreshold ? 0 : 5000;

  const total = cartTotal + shippingFee;

  const progress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);
  return (
    <section>
      <section className="pw-cart-page">
        <div className="pw-cart-container">
          {/* LEFT */}

          <div className="pw-cart-items">
            <div className="pw-cart-header">
              <h1>Shopping Cart</h1>

              <button className="pw-clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>

            {cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="pw-cart-item">
                <img
                  src={item.primary_image}
                  alt={item.name}
                  className="pw-cart-image"
                />

                <div className="pw-cart-details">
                  <h3>{item.name}</h3>

                  <p>Size: {item.size}</p>

                  <p className="pw-cart-price">
                    ₦{Number(item.price).toLocaleString()}
                  </p>
                </div>

                <div className="pw-cart-actions">
                  <div className="pw-qty-controls">
                    <button
                      onClick={() => decreaseQuantity(item.id, item.size)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id, item.size)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="pw-remove-btn"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="pw-cart-summary-wrapper">
            <div className="pw-cart-summary">
              <h2>Order Summary</h2>

              {cartTotal < freeShippingThreshold && (
                <>
                  <p className="pw-free-shipping-message">
                    Spend{" "}
                    <strong>
                      ₦
                      {Number(
                        freeShippingThreshold - cartTotal
                      ).toLocaleString()}
                    </strong>{" "}
                    more to enjoy FREE nationwide shipping.
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

              <div className="pw-summary-row">
                <span>Subtotal</span>

                <span>₦{Number(cartTotal).toLocaleString()}</span>
              </div>

              <div className="pw-summary-row">
                <span>Shipping</span>

                <span>
                  {shippingFee === 0
                    ? "FREE"
                    : `₦${Number(shippingFee).toLocaleString()}`}
                </span>
              </div>

              <div className="pw-summary-row total">
                <span>Total</span>

                <span>₦{Number(total).toLocaleString()}</span>
              </div>

              <button
                className="pw-checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

              <button
                className="pw-back-shopping-btn"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="pw-cart-recommendations pw-cart-page">
        <h2 className="pw-recommendations-heading">You Might Also Like</h2>

        <div className="pw-recommendations-row">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="pw-recommendation-product">
              <img src={product.primary_image} alt={product.name} />

              <h4>{product.name}</h4>

              <span>₦{Number(product.price).toLocaleString()}</span>

              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setDrawerOpen(true);
                }}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
        <ProductDrawer
          product={selectedProduct}
          products={allProducts}
          setSelectedProduct={setSelectedProduct}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
      </div>
    </section>
  );
};

export default Cart;
