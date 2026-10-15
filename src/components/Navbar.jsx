import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const industries = [
  { label: "Industries Overview", to: "/industries", end: true },
  { label: "Pharmaceutical Industry", to: "/industries/pharmaceutical" },
  { label: "Food Industry", to: "/industries/food" },
  { label: "Hospitals & Healthcare", to: "/industries/healthcare" },
];

const linkClass = ({ isActive }) =>
  `navbar__link${isActive ? " is-active" : ""}`;

function NavbarMenu({ pathname }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  const industriesActive = pathname.startsWith("/industries");

  function closeAll() {
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  function toggleDropdown() {
    setDropdownOpen((open) => !open);
  }

  useEffect(() => {
    function handlePointerDown(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        if (dropdownOpen) {
          setDropdownOpen(false);
          dropdownButtonRef.current?.focus();
        } else if (menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownOpen, menuOpen]);

  return (
    <header className="navbar">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="container navbar__inner">
        <Link
          to="/"
          className="navbar__brand"
          onClick={closeAll}
          aria-label="Maruti Chemicals home"
        >
          <span className="navbar__name">Maruti Chemicals</span>
          <span className="navbar__tagline">
            Quality in every connection
          </span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => {
            setMenuOpen((open) => !open);
            setDropdownOpen(false);
          }}
        >
          {menuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>

        <nav
          id="primary-nav"
          className={`navbar__nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="navbar__list">
            <li>
              <NavLink
                to="/"
                end
                className={linkClass}
                onClick={closeAll}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={linkClass}
                onClick={closeAll}
              >
                About
              </NavLink>
            </li>

            <li className="navbar__dropdown-wrap" ref={dropdownRef}>
              <button
                ref={dropdownButtonRef}
                type="button"
                className={`navbar__link navbar__dropdown-btn${
                  industriesActive ? " is-active" : ""
                }`}
                aria-expanded={dropdownOpen}
                aria-controls="industries-menu"
                onClick={toggleDropdown}
              >
                Industries
                <ChevronDown
                  size={16}
                  className={`navbar__chevron${
                    dropdownOpen ? " is-rotated" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <ul
                id="industries-menu"
                className={`navbar__dropdown${
                  dropdownOpen ? " is-open" : ""
                }`}
                hidden={!dropdownOpen}
              >
                {industries.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) =>
                        `navbar__dropdown-link${
                          isActive ? " is-active" : ""
                        }`
                      }
                      onClick={closeAll}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink
                to="/products"
                className={linkClass}
                onClick={closeAll}
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/why-us"
                className={linkClass}
                onClick={closeAll}
              >
                Why Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={linkClass}
                onClick={closeAll}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  return <NavbarMenu key={pathname} pathname={pathname} />;
}
