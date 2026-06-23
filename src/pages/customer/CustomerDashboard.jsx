import React, { useState } from "react";

import { Link, Outlet, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const CustomerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const location = useLocation();

  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/customer",
      icon: <LayoutDashboard />,
    },

    {
      name: "Orders",
      path: "/customer/orders",
      icon: <Package />,
    },

    {
      name: "Wishlist",
      path: "/customer/wishlist",
      icon: <Heart />,
    },

    {
      name: "Addresses",
      path: "/customer/addresses",
      icon: <MapPin />,
    },

    {
      name: "Payment Methods",
      path: "/customer/payment-methods",
      icon: <CreditCard />,
    },

    {
      name: "Account Settings",
      path: "/customer/account-settings",
      icon: <Settings />,
    },
  ];

  return (
    <section className="pw-customer-dashboard">
      {/* SIDEBAR */}
      <aside className={`pw-customer-sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* TOP */}
        <div className="pw-customer-sidebar-top">
          <h1>PrimeWears</h1>

          <button
            className="pw-customer-close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* LINKS */}
        <div className="pw-customer-links">
          {sidebarLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`pw-customer-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.icon}

              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* LOGOUT */}
        <button className="pw-customer-logout">
          <LogOut />

          <span>Logout</span>
        </button>
      </aside>

      {/* OVERLAY */}
      <div
        className={`pw-customer-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* MAIN */}
      <main className="pw-customer-main">
        {/* NAVBAR */}
        <div className="pw-customer-navbar">
          <div className="pw-customer-navbar-left">
            {!sidebarOpen && (
              <button
                className="pw-customer-menu-btn"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu />
              </button>
            )}

            <Link to="/" className="pw-customer-logo">
              PrimeWears
            </Link>
          </div>

          {/* USER */}
          <div className="pw-customer-user">
            <div className="pw-customer-avatar">A</div>
          </div>
        </div>

        {/* HERO */}
        <div className="pw-customer-hero">
          <h1>Welcome back, Adams 👋</h1>

          <p>Track orders, manage your account and explore new arrivals.</p>
        </div>

        {/* PAGE CONTENT */}
        <div className="pw-customer-content">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default CustomerDashboard;
