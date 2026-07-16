import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

const AccessoriesProductCard = ({ product }) => {
  const [showSizes, setShowSizes] = useState(false);

  const { addToCart } = useCart();

  return (
    <div
      className="pw-category-card"
      onMouseEnter={() => setShowSizes(true)}
      onMouseLeave={() => setShowSizes(false)}
    >
      {/* IMAGE */}
      <div className="pw-category-image-wrapper">
        <img
          src={product.primary_image}
          alt={product.name}
          className="pw-category-image"
          loading="lazy"
        />

        {/* Wishlist */}
        <button className="pw-category-like-btn">
          <Heart size={18} />
        </button>

        {/* Size / Variant Overlay */}
        <div
          className={`pw-category-size-overlay ${showSizes ? "active" : ""}`}
        >
          {product.variants?.length ? (
            product.variants.map((variant) => (
              <button
                key={variant.id}
                className="pw-category-size-btn"
                onClick={() => addToCart(product, variant.size)}
              >
                {variant.size}
              </button>
            ))
          ) : (
            <span className="pw-category-no-size">No options</span>
          )}
        </div>
      </div>

      {/* INFO */}
      <div className="pw-category-info">
        <h3>{product.name}</h3>

        <p className="pw-category-price">
          ₦{Number(product.price).toLocaleString()}
        </p>

        <div className="pw-category-rating">
          <Star size={15} fill="currentColor" />

          <span>0.0</span>

          <small>({product.review_count ?? 0} reviews)</small>
        </div>

        <p
          className={`pw-category-stock ${
            product.stock > 0 ? "in-stock" : "out-stock"
          }`}
        >
          {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default AccessoriesProductCard;
