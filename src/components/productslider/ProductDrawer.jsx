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
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    setSelectedSize("");
    setSizeError(false);

    if (product?.images?.length) {
      const primary =
        product.images.find((img) => img.is_primary) || product.images[0];

      setSelectedImage(primary.image_url);
      setSelectedColor(primary.color);
    }
  }, [product]);

  const recommendations = useMemo(() => {
    if (!products || !product) return [];

    return [...products]
      .filter((item) => item.id !== product.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  }, [product, products]);

  if (!product) return null;

  const colors = [
    ...new Set(product.images?.map((img) => img.color).filter(Boolean)),
  ];

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
            src={selectedImage}
            alt={product.name}
            className="pw-drawer-image"
          />

          <h2 className="pw-drawer-product-name">{product.name}</h2>

          <p className="pw-drawer-price">
            ₦{Number(product.price).toLocaleString()}
            {product.compare_price > product.price && (
              <span className="pw-old-price">
                ₦{Number(product.compare_price).toLocaleString()}
              </span>
            )}
          </p>
          {/* Stock */}
          <div className="pw-product-stock">
            <strong>Stock:</strong>{" "}
            {product.stock > 0 ? `${product.stock} Available` : "Out of Stock"}
          </div>

          {/* Colors */}
          {colors.length > 0 && (
            <>
              <h4 className="pw-size-title">Available Colors</h4>

              <div className="pw-color-options">
                {product.images?.map((image) => (
                  <button
                    key={image.id}
                    type="button"
                    className={`pw-color-swatch ${
                      selectedColor === image.color ? "active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        image.color.toLowerCase() === "white"
                          ? "#ffffff"
                          : image.color.toLowerCase(),
                    }}
                    onClick={() => {
                      setSelectedColor(image.color);
                      setSelectedImage(image.image_url);
                    }}
                    title={image.color}
                  />
                ))}
              </div>

              <p className="pw-selected-color">
                Color: <strong>{selectedColor}</strong>
              </p>
            </>
          )}

          {/* Sizes */}
          {product.variants?.length > 0 && (
            <>
              <h4 className="pw-size-title">Select Size</h4>

              <div className="pw-size-options">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`pw-size-btn ${
                      selectedSize === variant.size ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedSize(variant.size);
                      setSizeError(false);
                    }}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>

              {sizeError && (
                <p className="pw-size-error">
                  Please select a size before adding to cart.
                </p>
              )}
            </>
          )}

          <button
            className="pw-add-cart-final-btn"
            disabled={product.stock === 0}
            onClick={() => {
              if (product.variants?.length && !selectedSize) {
                setSizeError(true);
                return;
              }

              addToCart(product, selectedSize);

              setDrawerOpen(false);
            }}
          >
            {product.stock > 0 ? "Add To Cart" : "Out of Stock"}
          </button>

          {/* Description */}
          <div className="pw-product-description">
            <h4>Description</h4>

            <p>{product.description}</p>
          </div>

          {/* Recommendations */}
          <div className="pw-recommendations">
            <h3 className="pw-recommendations-title">You Might Also Like</h3>

            <div className="pw-recommendations-grid">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="pw-recommendation-card"
                  onClick={() => setSelectedProduct(item)}
                >
                  <img
                    src={item.primary_image}
                    alt={item.name}
                    className="pw-recommendation-image"
                  />

                  <div className="pw-rec-overlay">View Product</div>

                  <h4>{item.name}</h4>

                  <span>₦{Number(item.price).toLocaleString()}</span>
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
