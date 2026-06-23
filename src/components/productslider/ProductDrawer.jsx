import { useState, useEffect, useMemo } from "react";
import { FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const ProductDrawer = ({
  product,
  products,
  setSelectedProduct,
  drawerOpen,
  setDrawerOpen,
}) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeError, setSizeError] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    setSelectedSize("");
    setSizeError(false);
  }, [product]);

  const recommendations = useMemo(() => {
    if (!products || !product) return [];

    return [...products]
      .filter((item) => item.id !== product.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  }, [product, products]);

  if (!product) return null;

  return (
    <div
      className={`pw-drawer-overlay ${drawerOpen ? "active" : ""}`}
      onClick={() => setDrawerOpen(false)}
    >
      <div
        className={`pw-product-drawer ${drawerOpen ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="pw-drawer-header">
          <h3>Product Details</h3>

          <button className="pw-close-btn" onClick={() => setDrawerOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Product */}
        <div className="pw-drawer-content">
          <img
            src={product.image}
            alt={product.name}
            className="pw-drawer-image"
          />

          <h2 className="pw-drawer-product-name">{product.name}</h2>

          <p className="pw-drawer-price">${product.price}</p>

          {product.sizes && (
            <>
              <h4 className="pw-size-title">Select Size</h4>

              <div className="pw-size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`pw-size-btn ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="pw-size-error">
                  Please select a size before adding to cart
                </p>
              )}
            </>
          )}

          <button
            className="pw-add-cart-final-btn"
            onClick={() => {
              if (product.sizes?.length > 0 && !selectedSize) {
                setSizeError(true);
                return;
              }

              addToCart(product, selectedSize);

              setDrawerOpen(false);
            }}
          >
            Add To Cart
          </button>

          {/* Recommendations */}

          <div className="pw-recommendations">
            <h3 className="pw-recommendations-title">You Might Also Like</h3>

            <div className="pw-recommendations-grid">
              {recommendations?.map((item) => (
                <div
                  key={item.id}
                  className="pw-recommendation-card"
                  onClick={() => setSelectedProduct(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="pw-recommendation-image"
                  />

                  <div className="pw-rec-overlay">View Product</div>

                  <h4>{item.name}</h4>

                  <span>${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDrawer;
