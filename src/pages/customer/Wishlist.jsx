import React from "react";

import { Heart, ShoppingBag, Trash2 } from "lucide-react";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,

      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",

      name: "Prime Compression Tee",

      category: "Men",

      price: "$45",
    },

    {
      id: 2,

      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",

      name: "FlexFit Leggings",

      category: "Women",

      price: "$55",
    },

    {
      id: 3,

      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",

      name: "Prime Gym Bag",

      category: "Accessories",

      price: "$65",
    },
  ];

  return (
    <section className="pw-customer-wishlist">
      {/* TOP */}
      <div className="pw-customer-wishlist-top">
        <div>
          <h1>My Wishlist</h1>

          <p>Save your favorite PrimeWears pieces for later.</p>
        </div>

        <div className="pw-wishlist-count">
          <Heart />

          <span>{wishlistItems.length} Items</span>
        </div>
      </div>

      {/* GRID */}
      <div className="pw-wishlist-grid">
        {wishlistItems.map((item) => (
          <div key={item.id} className="pw-wishlist-card">
            {/* IMAGE */}
            <div className="pw-wishlist-image-wrapper">
              <img src={item.image} alt="" />

              <button className="pw-remove-wishlist-btn">
                <Trash2 />
              </button>
            </div>

            {/* CONTENT */}
            <div className="pw-wishlist-content">
              <span>{item.category}</span>

              <h3>{item.name}</h3>

              <h2>{item.price}</h2>
            </div>

            {/* ACTIONS */}
            <div className="pw-wishlist-actions">
              <button className="pw-add-cart-btn">
                <ShoppingBag />

                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
