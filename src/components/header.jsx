import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="gh-header">

      <div className="container-fluid">

        <div className="gh-header-content">

          {/* LOGO */}

          <div
            className="gh-logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://www.thegreenwichhotel.com/wp-content/themes/greenwich/assets/images/ui/logo-gh.svg"
              alt="Greenwich Hotel"
            />
          </div>


          {/* DESKTOP NAVIGATION */}

          <nav className="gh-desktop-nav">

            <Link
              to="/accommondations"
              className={`gh-nav-link ${location.pathname === "/accommondations" ? "active" : ""
                }`}
            >
              ACCOMMODATIONS
            </Link>

            <Link
              to="/shibui"
              className={`gh-nav-link ${location.pathname === "/shibui" ? "active" : ""
                }`}
            >
              SHIBUI SPA
            </Link>

            <Link
              to="/dining"
              className={`gh-nav-link ${location.pathname === "/dining" ? "active" : ""
                }`}
            >
              DINING
            </Link>

            <Link
              to="/poolgym"
              className={`gh-nav-link ${location.pathname === "/poolgym" ? "active" : ""
                }`}
            >
              POOL & GYM
            </Link>

            <Link
              to="/drawing"
              className={`gh-nav-link ${location.pathname === "/drawing" ? "active" : ""
                }`}
            >
              DRAWING ROOM & COURTYARD
            </Link>

            <Link
              to="/gallery"
              className={`gh-nav-link ${location.pathname === "/gallery" ? "active" : ""
                }`}
            >
              GALLERIES
            </Link>

            <Link
              to="/neigh"
              className={`gh-nav-link ${location.pathname === "/neigh" ? "active" : ""
                }`}
            >
              NEIGHBORHOOD
            </Link>

            <Link
              to="/press"
              className={`gh-nav-link ${location.pathname === "/press" ? "active" : ""
                }`}
            >
              PRESS
            </Link>

          </nav>


          {/* RIGHT SIDE */}

          <div className="gh-header-right">

            <button className="gh-reserve-btn">
              RESERVE
            </button>

            <div className="gh-leaders-club">
              <img
                src="https://www.thegreenwichhotel.com/wp-content/themes/greenwich/assets/images/ui/logo-leaders-club.png"
                alt="Leaders Club"
              />
            </div>


            {/* MOBILE MENU BUTTON */}

            <button
              className="gh-mobile-menu-btn"
              onClick={toggleMobileMenu}
            >

              <span
                className={`gh-hamburger ${isMobileMenuOpen ? "active" : ""
                  }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </span>

            </button>

          </div>

        </div>

      </div>


      {/* MOBILE MENU */}

      <nav className={`gh-mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>

        <Link to="/accommondations" onClick={toggleMobileMenu}>
          ACCOMMODATIONS
        </Link>

        <Link to="/shibui" onClick={toggleMobileMenu}>
          SHIBUI SPA
        </Link>

        <Link to="/dining" onClick={toggleMobileMenu}>
          DINING
        </Link>

        <Link to="/poolgym" onClick={toggleMobileMenu}>
          POOL & GYM
        </Link>

        <Link to="/drawing" onClick={toggleMobileMenu}>
          DRAWING ROOM & COURTYARD
        </Link>

        <Link to="/gallery" onClick={toggleMobileMenu}>
          GALLERIES
        </Link>

        <Link to="/neigh" onClick={toggleMobileMenu}>
          NEIGHBORHOOD
        </Link>

        <Link to="/press" onClick={toggleMobileMenu}>
          PRESS
        </Link>

      </nav>

    </header>
  );
}