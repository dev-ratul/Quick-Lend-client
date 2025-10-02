import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router"; // react-router-dom ব্যবহার করবি

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // scroll direction check
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // নিচে নামলে hide
    } else {
      setShow(true); // উপরে উঠলে show
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const menu = (
    <div className="flex flex-col md:flex-row gap-5 text-[18px]">
      <NavLink to="/" className="hover:text-primary">
        Home
      </NavLink>
      <NavLink to="/about" className="hover:text-primary">
        About
      </NavLink>
    </div>
  );

  return (
    <div
      className={`sticky top-0 z-50 bg-white shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center py-4 w-5/6 mx-auto">
        {/* Logo */}
        <div>
          <img
            className="w-20 h-10"
            src="https://i.ibb.co.com/wNKP0J3b/3dfa84ff062a34b1f02e81da56e57a11ffdb4050.png"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">{menu}</div>

        {/* Login/Logout */}
        <div className="hidden md:flex gap-3">
          <Link to="/login" className="btn text-white bg-primary">
            Login
          </Link>
          <Link to="/register" className="btn text-white bg-primary">
            Register
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4 text-center">
          {menu}
          <div className="flex flex-col gap-3">
            <Link to="/login" className="btn text-white bg-primary">
              Login
            </Link>
            <Link to="/register" className="btn text-white bg-primary">
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
