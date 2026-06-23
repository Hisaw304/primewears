import { FaHeart, FaPlus } from "react-icons/fa";

const ProductCard = ({ product, openDrawer }) => {
  return (
    <div className="pw-product-card">
      <div className="pw-product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="pw-product-image"
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

        <p className="pw-product-price">${product.price}</p>

        <div className="pw-product-rating">
          <span className="pw-stars">★★★★★</span>

          <span className="pw-review-count">{product.reviews} Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
