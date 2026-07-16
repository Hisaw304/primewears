import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PUBLIC PAGES
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";

// ADMIN LAYOUT
import Admin from "./pages/admin/AdminDashboard";

// ADMIN PAGES
import AdminHome from "./pages/admin/AdminHome";
import Products from "./pages/admin/Products";
import AddProduct from "./pages/admin/AddProduct";
import Orders from "./pages/admin/Orders";
import Customers from "./pages/admin/Customers";
import Settings from "./pages/admin/Settings";

// CUSTOMER LAYOUT
import CustomerDashboard from "./pages/customer/CustomerDashboard";

// CUSTOMER PAGES
import CustomerHome from "./pages/customer/CustomerHome";
import CustomerOrders from "./pages/customer/CustomerOrders";
import Wishlist from "./pages/customer/Wishlist";
import Addresses from "./pages/customer/Addresses";
import PaymentMethods from "./pages/customer/PaymentMethods";
import AccountSettings from "./pages/customer/AccountSettings";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";
import Men from "./pages/Men";
import Accessories from "./pages/Accessories";
import Women from "./pages/Women";
import SearchPage from "./pages/SearchPage";
import Preloader from "./components/Preloader";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const preloadPages = [
    "/",
    "/shop",
    "/shop/men",
    "/shop/women",
    "/shop/accessories",
    "/about",
    "/contact",
  ];

  useEffect(() => {
    if (preloadPages.includes(location.pathname)) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 1200);

      return () => clearTimeout(timer);
    }

    setLoading(false);
  }, [location.pathname]);

  // ADMIN CHECK
  const isAdminPage = location.pathname.startsWith("/admin");

  // CUSTOMER DASHBOARD CHECK
  const isCustomerPage = location.pathname.startsWith("/customer");

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* HIDE NAVBAR ON ADMIN + CUSTOMER */}
      {!isAdminPage && !isCustomerPage && <Navbar />}
      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/men" element={<Men />} />
          <Route path="/shop/women" element={<Women />} />
          <Route path="/shop/accessories" element={<Accessories />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/payment-sucess" element={<PaymentSuccess />} />

          <Route path="/payment-failed" element={<PaymentFailed />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* ADMIN */}
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminHome />} />

            <Route path="products" element={<Products />} />

            <Route path="add-product" element={<AddProduct />} />

            <Route path="orders" element={<Orders />} />

            <Route path="customers" element={<Customers />} />

            <Route path="settings" element={<Settings />} />
          </Route>

          {/* CUSTOMER */}
          <Route path="/customer" element={<CustomerDashboard />}>
            <Route index element={<CustomerHome />} />

            <Route path="orders" element={<CustomerOrders />} />

            <Route path="wishlist" element={<Wishlist />} />

            <Route path="addresses" element={<Addresses />} />

            <Route path="payment-methods" element={<PaymentMethods />} />

            <Route path="account-settings" element={<AccountSettings />} />
          </Route>
        </Routes>
      </main>

      {/* HIDE FOOTER ON ADMIN + CUSTOMER */}
      {!isAdminPage && !isCustomerPage && <Footer />}
    </div>
  );
}
