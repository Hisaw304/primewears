import { Link } from "react-router-dom";
import { useState } from "react";

import womensWear from "../data/womensWear";
import WomenProductCard from "../components/WomenProductCard";

const Women = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = womensWear.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(womensWear.length / productsPerPage);

  return (
    <section>
      {/* HERO */}

      <section className="pw-men-hero">
        <div className="pw-men-hero-container">
          <div className="pw-men-breadcrumb">
            <Link to="/">Home</Link>

            <span>/</span>

            <span>Women Gym Clothes & Wears</span>
          </div>

          <div className="pw-men-hero-content">
            <h1 className="pw-men-title">Women Gym Clothes & Wears</h1>

            <p className="pw-men-description">
              Discover premium activewear designed for confidence, comfort, and
              performance. From leggings and sports bras to jackets and workout
              sets, Prime Wear helps you move with style every day.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}

      <section className="pw-category-grid">
        {currentProducts.map((product) => (
          <WomenProductCard key={product.id} product={product} />
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

export default Women;
