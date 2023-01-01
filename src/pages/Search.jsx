import { useLocation } from "react-router-dom";

import mensWear from "../data/mensWear";
import womensWear from "../data/womensWear";
import accessories from "../data/accessories";

import MenProductCard from "../components/MenProductCard";

const SearchPage = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");

  const allProducts = [...mensWear, ...womensWear, ...accessories];

  const filteredProducts = allProducts.filter((product) =>
    [product.name, product.category]
      .join(" ")
      .toLowerCase()
      .includes(query?.toLowerCase() || "")
  );

  return (
    <section className="pw-search-page">
      <div className="pw-search-header">
        <h1>Search Results for "{query}"</h1>

        <p>
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found
        </p>
      </div>

      <div className="pw-category-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <MenProductCard
              key={`${product.category}-${product.id}`}
              product={product}
            />
          ))
        ) : (
          <div className="pw-no-results">
            <h3>No products found</h3>

            <p>Try searching with another keyword.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
