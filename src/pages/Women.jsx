import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import WomenProductCard from "../components/WomenProductCard";

const Women = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");

        const womenProducts = (res.data.data || []).filter(
          (product) => product.category?.slug === "women"
        );

        setProducts(womenProducts);
      } catch (error) {
        console.error("Error fetching women's products:", error);
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

      {loading ? (
        <div className="pw-loading-products">
          <h2>Loading products...</h2>
        </div>
      ) : (
        <>
          <section className="pw-category-grid">
            {currentProducts.map((product) => (
              <WomenProductCard key={product.id} product={product} />
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
        </>
      )}
    </section>
  );
};

export default Women;
