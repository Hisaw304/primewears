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
      <div className="pw-category-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="pw-category-image"
        />

        <button className="pw-category-like-btn">
          <Heart size={18} />
        </button>

        <div
          className={`pw-category-size-overlay ${showSizes ? "active" : ""}`}
        >
          {product.sizes.map((size) => (
            <button
              key={size}
              className="pw-category-size-btn"
              onClick={() => addToCart(product, size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="pw-category-info">
        <h3>{product.name}</h3>

        <p className="pw-category-price">${product.price}</p>

        <div className="pw-category-rating">
          <Star size={15} fill="currentColor" />

          <span>{product.rating}</span>

          <small>({product.reviews} reviews)</small>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesProductCard;
