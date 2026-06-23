import React, { useState } from "react";

import { Link, Outlet, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  ShoppingBag,
  PlusSquare,
  PackageCheck,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const location = useLocation();

  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <LayoutDashboard />,
    },

    {
      name: "Products Management",
      path: "/admin/products",
      icon: <ShoppingBag />,
    },

    {
      name: "Add Product",
      path: "/admin/add-product",
      icon: <PlusSquare />,
    },

    {
      name: "Orders",
      path: "/admin/orders",
      icon: <PackageCheck />,
    },

    {
      name: "Customers",
      path: "/admin/customers",
      icon: <Users />,
    },

    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings />,
    },
  ];

  return (
    <section className="pw-admin">
      {/* SIDEBAR */}
      <aside className={`pw-admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* TOP */}
        <div className="pw-admin-sidebar-top">
          <h1>PrimeWears</h1>

          <button
            className="pw-admin-close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* LINKS */}
        <div className="pw-admin-links">
          {sidebarLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`pw-admin-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.icon}

              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* LOGOUT */}
        <button className="pw-admin-logout">
          <LogOut />

          <span>Logout</span>
        </button>
      </aside>

      {/* OVERLAY */}
      <div
        className={`pw-admin-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* MAIN */}
      <main className="pw-admin-main">
        {/* TOP NAV */}
        <div className="pw-admin-navbar">
          <div className="pw-admin-navbar-left">
            {!sidebarOpen && (
              <button
                className="pw-admin-menu-btn"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu />
              </button>
            )}

            <h2>Admin Dashboard</h2>
          </div>

          <div className="pw-admin-user">
            <div className="pw-admin-user-img">A</div>

            <div>
              <h4>Admin</h4>

              <span>Administrator</span>
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="pw-admin-content">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
