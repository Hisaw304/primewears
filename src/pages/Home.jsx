import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import FooterCta from "../components/FooterCta";
import ProductSlider from "../components/productslider/ProductSlider";
import CategoryShowcase from "../components/CategoryShowcase";
import api from "../services/api";

const Home = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [accessoriesProducts, setAccessoriesProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");

        const products = response.data.data || [];

        setMenProducts(
          products.filter((product) => product.category?.slug === "men")
        );

        setWomenProducts(
          products.filter((product) => product.category?.slug === "women")
        );

        setAccessoriesProducts(
          products.filter((product) => product.category?.slug === "accessories")
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="pw-loading">
        <h2>Loading products...</h2>
      </div>
    );
  }

  return (
    <div>
      <Hero />

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

      <CategoryShowcase />

      <Testimonials />

      <FooterCta />
    </div>
  );
};

export default Home;
