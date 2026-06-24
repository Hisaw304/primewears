import { Link } from "react-router-dom";
import { useState } from "react";

import accessories from "../data/accessories";
import AccessoriesProductCard from "../components/AccessoriesProductCard";

const Accessories = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = accessories.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(accessories.length / productsPerPage);

  return (
    <section>
      {/* HERO */}

      <section className="pw-men-hero">
        <div className="pw-men-hero-container">
          <div className="pw-men-breadcrumb">
            <Link to="/">Home</Link>

            <span>/</span>

            <span>Gym Accessories</span>
          </div>

          <div className="pw-men-hero-content">
            <h1 className="pw-men-title">Gym Accessories</h1>

            <p className="pw-men-description">
              Complete your training setup with premium gym accessories. From
              bottles and gloves to bags, caps, towels, and performance
              essentials built for every workout.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}

      <section className="pw-category-grid">
        {currentProducts.map((product) => (
          <AccessoriesProductCard key={product.id} product={product} />
        ))}
      </section>

      {/* PAGINATION */}

      {totalPages > 1 && (
        <div className="pw-pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Accessories;
