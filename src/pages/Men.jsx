import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import MenProductCard from "../components/MenProductCard";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");

        // Adjust this if your API response is different
        setProducts(response.data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <section>
      {/* Hero */}
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

      {/* Products */}
      {loading ? (
        <div className="pw-loading">
          <h3>Loading products...</h3>
        </div>
      ) : currentProducts.length > 0 ? (
        <section className="pw-category-grid">
          {currentProducts.map((product) => (
            <MenProductCard key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <div className="pw-loading">
          <h3>No products found.</h3>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pw-pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
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
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Men;
