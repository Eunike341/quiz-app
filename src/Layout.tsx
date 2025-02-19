import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="p-4 bg-blue-500 text-white flex justify-between items-center shadow-lg">
        {/* Brand / Logo */}
        <Link to="/" className="text-lg font-bold">
          Quiz App
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/records" className="hover:text-gray-300 transition">
              View Scores
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-500 text-white p-4 space-y-2">
          <li>
            <Link to="/" className="block p-2 hover:bg-blue-600 rounded" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/records" className="block p-2 hover:bg-blue-600 rounded" onClick={() => setIsOpen(false)}>
              View Scores
            </Link>
          </li>
        </ul>
      )}

      {/* Page Content */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
