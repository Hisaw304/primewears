import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const CategoryShowcase = () => {
  const [categories, setCategories] = useState([]);
  const [indexes, setIndexes] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/products");

        const products = response.data.data || [];

        const grouped = [
          {
            title: "Men",
            button: "Shop Men",
            link: "/shop/men",
            images: products
              .filter((p) => p.category?.slug === "men")
              .slice(0, 5)
              .map((p) => p.primary_image),
          },
          {
            title: "Women",
            button: "Shop Women",
            link: "/shop/women",
            images: products
              .filter((p) => p.category?.slug === "women")
              .slice(0, 5)
              .map((p) => p.primary_image),
          },
          {
            title: "Accessories",
            button: "Shop Accessories",
            link: "/shop/accessories",
            images: products
              .filter((p) => p.category?.slug === "accessories")
              .slice(0, 5)
              .map((p) => p.primary_image),
          },
        ];

        setCategories(grouped);

        setIndexes(grouped.map(() => 0));
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!categories.length) return;

    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((current, index) => {
          const total = categories[index].images.length;
          return total ? (current + 1) % total : 0;
        })
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [categories]);

  return (
    <section className="pw-categorys-showcase">
      {categories.map((category, index) => (
        <div key={category.title} className="pw-categorys-card">
          {category.images.length > 0 && (
            <img
              src={category.images[indexes[index]]}
              alt={category.title}
              className="pw-categorys-image"
            />
          )}

          <div className="pw-categorys-overlay">
            <h2 className="pw-categorys-title">{category.title}</h2>

            <Link to={category.link} className="pw-categorys-btn">
              {category.button}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryShowcase;
