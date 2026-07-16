import { FaHeart, FaPlus } from "react-icons/fa";

const ProductCard = ({ product, openDrawer }) => {
  return (
    <div className="pw-product-card">
      <div className="pw-product-image-wrapper">
        {/* Popular Badge */}
        {product.is_popular && (
          <span className="pw-popular-badge">Popular</span>
        )}

        <img
          src={product.primary_image}
          alt={product.name}
          className="pw-product-image"
          loading="lazy"
        />

        <button className="pw-wishlist-btn">
          <FaHeart />
        </button>

        <button className="pw-add-cart-btn" onClick={() => openDrawer(product)}>
          <FaPlus />
        </button>
      </div>

      <div className="pw-product-info">
        <h3 className="pw-product-name">{product.name}</h3>

        <div className="pw-product-price-wrapper">
          <p className="pw-product-price">
            ₦{Number(product.price).toLocaleString()}
          </p>

          {product.compare_price > product.price && (
            <span className="pw-product-old-price">
              ₦{Number(product.compare_price).toLocaleString()}
            </span>
          )}
        </div>

        <div className="pw-product-rating">
          <span className="pw-stars">★★★★★</span>

          <span className="pw-review-count">
            {product.review_count} Reviews
          </span>
        </div>

        <p
          className={`pw-product-stock-btn ${
            product.stock > 0 ? "in-stock" : "out-stock"
          }`}
        >
          {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
