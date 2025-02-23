import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Add background if scrolled
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav
        className={`fixed w-full top-0 z-50 p-4 transition-all duration-300 ${
          isScrolled ? "bg-blue-600 shadow-lg" : "bg-blue-500"
        } text-white flex justify-between items-center`}
      >
        {/* Brand / Logo */}
        <Link to="/places" className="text-lg font-bold">
          Quiz App
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`block md:hidden text-white text-3xl p-2 transform transition duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/places"
              className={`hover:text-gray-300 transition ${
                location.pathname === "/places" ? "border-b-2 border-white" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/places_list"
              className={`hover:text-gray-300 transition ${
                location.pathname === "/places_list" ? "border-b-2 border-white" : ""
              }`}
            >
              View Places
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Dropdown Menu (Slide Down) */}
      <div
        className={`fixed top-[64px] left-0 w-full bg-blue-600 text-white md:hidden transform transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="p-4 space-y-3">
          <li>
            <Link
              to="/places"
              className="block p-2 hover:bg-blue-700 rounded"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/places_list"
              className="block p-2 hover:bg-blue-700 rounded"
              onClick={() => setIsOpen(false)}
            >
              View Places
            </Link>
          </li>
        </ul>
      </div>

      {/* Page Content */}
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
