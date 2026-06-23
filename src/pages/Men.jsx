import { Link } from "react-router-dom";
import { useState } from "react";
import mensWear from "../data/mensWear";
import MenProductCard from "../components/MenProductCard";

const Men = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = mensWear.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(mensWear.length / productsPerPage);

  return (
    <section>
      <section className="pw-men-hero">
        <div className="pw-men-hero-container">
          {/* Breadcrumb */}

          <div className="pw-men-breadcrumb">
            <Link to="/">Home</Link>

            <span>/</span>

            <span>Men Gym Clothes & Wears</span>
          </div>

          {/* Content */}

          <div className="pw-men-hero-content">
            <h1 className="pw-men-title">Men Gym Clothes & Wears</h1>

            <p className="pw-men-description">
              Discover premium gym wear designed for performance, comfort, and
              style. From training shirts and joggers to shorts and compression
              wear, Prime Wear helps you train harder and look better every day.
            </p>
          </div>
        </div>
      </section>
      <section className="pw-category-grid">
        {currentProducts.map((product) => (
          <MenProductCard key={product.id} product={product} />
        ))}
      </section>

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

export default Men;
