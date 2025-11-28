import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12" />
          <span className="text-2xl font-bold text-green-700">
            GreensGroup
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pb-1 border-b-4 ${
                isActive ? "border-green-600 text-green-700" : "border-transparent"
              } hover:text-green-700`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `pb-1 border-b-4 ${
                isActive ? "border-green-600 text-green-700" : "border-transparent"
              } hover:text-green-700`
            }
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/WhyUs"
            className={({ isActive }) =>
              `pb-1 border-b-4 ${
                isActive ? "border-green-600 text-green-700" : "border-transparent"
              } hover:text-green-700`
            }
          >
            WHY US
          </NavLink>
          <NavLink
            to="/CaseStudies"
            className={({ isActive }) =>
              `pb-1 border-b-4 ${
                isActive ? "border-green-600 text-green-700" : "border-transparent"
              } hover:text-green-700`
            }
          >
            CASE STUDIES
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) =>
              `pb-1 border-b-4 ${
                isActive ? "border-green-600 text-green-700" : "border-transparent"
              } hover:text-green-700`
            }
          >
            BLOG
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `pb-1 border-b-4 ${
                isActive ? "border-green-600 text-green-700" : "border-transparent"
              } hover:text-green-700`
            }
          >
            CONTACT
          </NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-1 w-7 bg-green-700 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-1 w-7 bg-green-700 transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`h-1 w-7 bg-green-700 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white shadow-inner transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-start gap-4 px-6 text-lg font-semibold">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            HOME
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            WHY US
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            CASE STUDIES
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            BLOG
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            CONTACT
          </NavLink>

        </nav>
      </div>
    </header>
  );
}
