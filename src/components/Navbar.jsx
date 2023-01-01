import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from "lucide-react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [mobileShopDropdown, setMobileShopDropdown] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };
  const submitSearch = () => {
    if (!searchTerm.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About",
      path: "/about",
    },

    {
      name: "Contact",
      path: "/contact",
    },

    {
      name: "New In",
      path: "/new-in",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="pw-navbar">
        <div className="pw-navbar-container">
          {/* LEFT DESKTOP LINKS */}
          <div className="pw-nav-left">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} className="pw-nav-link">
                {link.name}
              </Link>
            ))}

            {/* SHOP DROPDOWN */}
            <div className="pw-shop-dropdown">
              <button
                className="pw-shop-btn"
                onClick={() => setShopDropdown(!shopDropdown)}
              >
                Shop
                <ChevronDown
                  className={`pw-dropdown-icon ${shopDropdown ? "rotate" : ""}`}
                />
              </button>

              {/* DROPDOWN MENU */}
              <div
                className={`pw-dropdown-menu ${shopDropdown ? "active" : ""}`}
              >
                <Link to="/shop/men" className="pw-dropdown-link">
                  Men
                </Link>

                <Link to="/shop/women" className="pw-dropdown-link">
                  Women
                </Link>
                <Link to="/shop/accessories" className="pw-dropdown-link">
                  Accessories
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE LEFT */}
          <div className="pw-mobile-left">
            <button className="pw-icon-btn" onClick={() => setMenuOpen(true)}>
              <Menu className="pw-icon" />
            </button>

            <button className="pw-icon-btn" onClick={() => setMenuOpen(true)}>
              <Search className="pw-icon" />
            </button>
          </div>

          {/* LOGO */}
          <div className="pw-logo">
            <Link to="/">
              <h1>PrimeWears</h1>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="pw-nav-right">
            {/* DESKTOP SEARCH */}
            <div className="pw-search-box">
              <Search className="pw-search-icon" onClick={submitSearch} />

              <input
                type="text"
                placeholder="Search products..."
                className="pw-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>

            {/* USER */}
            <Link to="/login">
              <button className="pw-icon-btn">
                <User className="pw-icon" />
              </button>
            </Link>

            {/* CART */}
            {/* CART */}
            <button className="pw-cart-btn" onClick={() => navigate("/cart")}>
              <ShoppingBag className="pw-icon" />

              {cartCount > 0 && (
                <span className="pw-cart-count">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`pw-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* SIDEBAR */}
      <div className={`pw-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="pw-sidebar-top">
          {/* LOGO */}
          <h1 className="pw-sidebar-logo">PrimeWears</h1>

          {/* CLOSE */}
          <button className="pw-icon-btn" onClick={() => setMenuOpen(false)}>
            <X className="pw-icon" />
          </button>
        </div>

        {/* SEARCH */}
        <div className="pw-sidebar-search">
          <Search className="pw-search-icon" onClick={submitSearch} />

          <input
            type="text"
            placeholder="Search products..."
            className="pw-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        {/* LINKS */}
        <div className="pw-sidebar-links">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="pw-sidebar-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE SHOP */}
          <div className="pw-mobile-shop">
            <button
              className="pw-mobile-shop-btn"
              onClick={() => setMobileShopDropdown(!mobileShopDropdown)}
            >
              Shop
              <ChevronDown
                className={`pw-dropdown-icon ${
                  mobileShopDropdown ? "rotate" : ""
                }`}
              />
            </button>

            {/* MOBILE DROPDOWN */}
            <div
              className={`pw-mobile-dropdown ${
                mobileShopDropdown ? "active" : ""
              }`}
            >
              <Link
                to="/shop/men"
                className="pw-mobile-dropdown-link"
                onClick={() => setMenuOpen(false)}
              >
                Men
              </Link>

              <Link
                to="/shop/women"
                className="pw-mobile-dropdown-link"
                onClick={() => setMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                to="/shop/accessories"
                className="pw-mobile-dropdown-link"
                onClick={() => setMenuOpen(false)}
              >
                Accessories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
