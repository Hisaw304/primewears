import React, { useState } from "react";

const AddProduct = () => {
  const [dragActive, setDragActive] = useState(false);

  return (
    <section className="pw-add-product">
      {/* TOP */}
      <div className="pw-add-product-top">
        <h1>Add New Product</h1>

        <p>Create and manage products for PrimeWears store inventory.</p>
      </div>

      {/* FORM */}
      <form className="pw-add-product-form">
        {/* PRODUCT NAME */}
        <div className="pw-add-group">
          <label>Product Name</label>

          <input type="text" placeholder="Enter product name" />
        </div>

        {/* DESCRIPTION */}
        <div className="pw-add-group">
          <label>Description</label>

          <textarea placeholder="Write product description"></textarea>
        </div>

        {/* PRICE + CURRENCY */}
        <div className="pw-add-grid">
          <div className="pw-add-group">
            <label>Price</label>

            <input type="number" placeholder="0.00" />
          </div>

          <div className="pw-add-group">
            <label>Currency</label>

            <select>
              <option>USD</option>

              <option>EUR</option>

              <option>GBP</option>

              <option>NGN</option>
            </select>
          </div>
        </div>

        {/* CATEGORY */}
        <div className="pw-add-group">
          <label>Category</label>

          <select>
            <option>Men</option>

            <option>Women</option>

            <option>Accessories</option>
          </select>
        </div>

        {/* SIZES */}
        <div className="pw-add-group">
          <label>Sizes</label>

          <div className="pw-size-options">
            <button type="button">XS</button>

            <button type="button">S</button>

            <button type="button">M</button>

            <button type="button">L</button>

            <button type="button">XL</button>

            <button type="button">XXL</button>
          </div>
        </div>

        {/* STOCK */}
        <div className="pw-add-group">
          <label>Stock</label>

          <input type="number" placeholder="Available quantity" />
        </div>

        {/* UPLOAD */}
        <div className="pw-add-group">
          <label>Upload Product Images</label>

          <div
            className={`pw-upload-box ${dragActive ? "active" : ""}`}
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
          >
            <input type="file" multiple />

            <h3>Choose file or drag & drop</h3>

            <p>Upload product images here</p>
          </div>
        </div>

        {/* FLAGS */}
        <div className="pw-add-group">
          <label>Product Flags</label>

          <div className="pw-flags">
            <label className="pw-flag-item">
              <input type="checkbox" />

              <span>New In</span>
            </label>

            <label className="pw-flag-item">
              <input type="checkbox" />

              <span>Popular</span>
            </label>
          </div>
        </div>

        {/* BUTTON */}
        <button type="submit" className="pw-save-product-btn">
          Save Product
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
