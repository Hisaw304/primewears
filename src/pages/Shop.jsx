import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

import ProductSlider from "../components/productslider/ProductSlider";
import FooterCta from "../components/FooterCta";

import shopHero from "../assets/about-hero.jpg";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
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

  const menProducts = products.filter(
    (product) => product.category?.slug === "men"
  );

  const womenProducts = products.filter(
    (product) => product.category?.slug === "women"
  );

  const accessoriesProducts = products.filter(
    (product) => product.category?.slug === "accessories"
  );

  return (
    <>
      {/* HERO */}

      <section
        className="pw-shop-hero"
        style={{
          backgroundImage: `url(${shopHero})`,
        }}
      >
        <div className="pw-shop-overlay">
          <div className="pw-shop-hero-content">
            <p className="pw-shop-breadcrumb">
              <Link to="/">Home</Link> / Shop
            </p>

            <h1>Shop Gym Wear</h1>

            <p>
              Discover premium gym clothing, performance wear, and accessories
              built for training, recovery, and everyday confidence.
            </p>
          </div>
        </div>
      </section>

      {loading ? (
        <section className="pw-loading-products">
          <h2>Loading products...</h2>
        </section>
      ) : (
        <>
          <ProductSlider
            title="Men's Wear"
            products={menProducts}
            link="/shop/men"
          />

          <ProductSlider
            title="Women's Wear"
            products={womenProducts}
            link="/shop/women"
          />

          <ProductSlider
            title="Accessories"
            products={accessoriesProducts}
            link="/shop/accessories"
          />
        </>
      )}

      <FooterCta />
    </>
  );
};

export default Shop;
