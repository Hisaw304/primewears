import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";
import MenProductCard from "../components/MenProductCard";

const SearchPage = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await api.get("/products");

        setProducts(res.data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const searchText = [
      product.name,
      product.description,
      product.category?.name,
      product.category?.slug,
    ]
      .join(" ")
      .toLowerCase();

    return searchText.includes(query.toLowerCase());
  });

  return (
    <section className="pw-search-page">
      <div className="pw-search-header">
        <h1>Search Results for "{query}"</h1>

        {!loading && (
          <p>
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} found
          </p>
        )}
      </div>

      {loading ? (
        <div className="pw-search-loading">
          <h3>Loading products...</h3>
        </div>
      ) : (
        <div className="pw-category-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <MenProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="pw-no-results">
              <h3>No products found</h3>

              <p>
                We couldn't find any products matching{" "}
                <strong>"{query}"</strong>.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default SearchPage;
