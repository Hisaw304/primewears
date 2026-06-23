import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductDrawer from "./ProductDrawer";

const ProductSlider = ({ title, products, link }) => {
  const navigate = useNavigate();

  const sliderRef = useRef(null);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  const handleOpenDrawer = (product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  return (
    <>
      <section className="pw-products-section">
        <div className="pw-products-header">
          <h2 className="pw-products-title">{title}</h2>

          <button className="pw-show-all-btn" onClick={() => navigate(link)}>
            Show All
          </button>
        </div>

        <div className="pw-slider-wrapper">
          <button
            className="pw-slider-arrow pw-arrow-left"
            onClick={scrollLeft}
          >
            ←
          </button>

          <div ref={sliderRef} className="pw-products-slider">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                openDrawer={handleOpenDrawer}
              />
            ))}
          </div>

          <button
            className="pw-slider-arrow pw-arrow-right"
            onClick={scrollRight}
          >
            →
          </button>
        </div>
      </section>

      <ProductDrawer
        product={selectedProduct}
        products={products}
        setSelectedProduct={setSelectedProduct}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </>
  );
};

export default ProductSlider;
