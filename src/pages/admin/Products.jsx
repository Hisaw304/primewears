import React, { useState } from "react";

import { Search, Pencil, Trash2, X, Plus } from "lucide-react";

import { Link } from "react-router-dom";

const Products = () => {
  const [category, setCategory] = useState("All");

  const [editModal, setEditModal] = useState(false);

  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      name: "Prime Compression Tee",
      price: "$45",
      stock: 32,
      category: "Men",
    },

    {
      id: 2,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
      name: "FlexFit Leggings",
      price: "$55",
      stock: 20,
      category: "Women",
    },

    {
      id: 3,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      name: "Prime Gym Bag",
      price: "$65",
      stock: 14,
      category: "Accessories",
    },
  ];

  return (
    <section className="pw-products-management">
      {/* TOP */}
      <div className="pw-products-top">
        <div>
          <h1>Products Management</h1>

          <p>Manage your PrimeWears products and inventory</p>
        </div>

        <Link to="/admin/add-product" className="pw-add-product-link">
          <Plus />

          <span>Add Product</span>
        </Link>
      </div>

      {/* FILTER AREA */}
      <div className="pw-products-filter-area">
        {/* SEARCH */}
        <div className="pw-products-search">
          <Search />

          <input type="text" placeholder="Search products..." />
        </div>

        {/* FILTERS */}
        <div className="pw-products-filters">
          {["All", "Men", "Women", "Accessories"].map((item, index) => (
            <button
              key={index}
              onClick={() => setCategory(item)}
              className={`pw-filter-btn ${category === item ? "active" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* TABLE */}
      <div className="pw-products-table-wrapper">
        <table className="pw-products-table">
          <thead>
            <tr>
              <th>Image</th>

              <th>Product</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt="" className="pw-product-img" />
                </td>

                <td>
                  <div className="pw-product-info">
                    <h4>{product.name}</h4>

                    <span>{product.category}</span>
                  </div>
                </td>

                <td>{product.price}</td>

                <td>
                  <span className="pw-stock-badge">{product.stock}</span>
                </td>

                <td>
                  <div className="pw-table-actions">
                    <button
                      className="pw-edit-btn"
                      onClick={() => setEditModal(true)}
                    >
                      <Pencil />
                    </button>

                    <button className="pw-delete-btn">
                      <Trash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="pw-pagination">
        <button>Prev</button>

        <button className="active">1</button>

        <button>2</button>

        <button>3</button>

        <button>Next</button>
      </div>

      {/* EDIT MODAL */}
      {/* EDIT MODAL */}
      <div
        className={`pw-edit-modal ${editModal ? "active" : ""}`}
        onClick={() => setEditModal(false)}
      >
        <div
          className="pw-edit-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* TOP */}
          <div className="pw-edit-modal-top">
            <h2>Edit Product</h2>

            <button onClick={() => setEditModal(false)}>
              <X />
            </button>
          </div>

          {/* FORM */}
          <form className="pw-edit-form">
            <div className="pw-edit-group">
              <label>Product Name</label>

              <input type="text" placeholder="Product name" />
            </div>

            <div className="pw-edit-group">
              <label>Price</label>

              <input type="number" placeholder="0.00" />
            </div>

            <div className="pw-edit-group">
              <label>Stock</label>

              <input type="number" placeholder="0" />
            </div>

            <button type="submit" className="pw-save-edit-btn">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Products;
