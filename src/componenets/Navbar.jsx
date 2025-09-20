import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLink, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

function Navbar() {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const onRegisterHandler = () => {
    navigate('/register');
    console.log("Logout clicked");
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <FaLink size={24} />
          <span className="font-bold text-xl">ZipIt</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-all duration-300 hover:text-green-400 ${
                path === item.path ? "font-semibold text-green-400" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Example logout (optional) */}
          <button
            onClick={onRegisterHandler}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Sign up
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)}>
            {navbarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="md:hidden bg-blue-600 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setNavbarOpen(false)}
              className={`block transition-all duration-300 hover:text-green-400 ${
                path === item.path ? "font-semibold text-green-400" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              onRegisterHandler();
              setNavbarOpen(false);
            }}
            className="block w-full text-left bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
