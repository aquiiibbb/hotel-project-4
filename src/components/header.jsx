import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import image1 from '../Assest/logo.png';

export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="gh-header">

      <div className="container-fluid">

        <div className="gh-header-content">

          {/* LOGO */}

          <Link to="/" className="gh-logo" onClick={closeMobileMenu}>
            <img
              src={image1}
              alt="Greenwich Hotel"
            />
          </Link>


          {/* DESKTOP NAV */}

          <nav className="gh-desktop-nav">

            <Link
              to="/accommondations"
              className={`gh-nav-link ${location.pathname === "/accommondations" ? "active" : ""}`}
            >
              ACCOMMODATIONS
            </Link>

            <Link
              to="/shibui"
              className={`gh-nav-link ${location.pathname === "/shibui" ? "active" : ""}`}
            >
              SHIBUI SPA
            </Link>

            <Link
              to="/dining"
              className={`gh-nav-link ${location.pathname === "/dining" ? "active" : ""}`}
            >
              DINING
            </Link>

            <Link
              to="/poolgym"
              className={`gh-nav-link ${location.pathname === "/poolgym" ? "active" : ""}`}
            >
              POOL & GYM
            </Link>

            <Link
              to="/drawing"
              className={`gh-nav-link ${location.pathname === "/drawing" ? "active" : ""}`}
            >
              DRAWING ROOM & COURTYARD
            </Link>

            <Link
              to="/gallery"
              className={`gh-nav-link ${location.pathname === "/gallery" ? "active" : ""}`}
            >
              GALLERIES
            </Link>

            <Link
              to="/neigh"
              className={`gh-nav-link ${location.pathname === "/neigh" ? "active" : ""}`}
            >
              NEIGHBORHOOD
            </Link>

            <Link
              to="/press"
              className={`gh-nav-link ${location.pathname === "/press" ? "active" : ""}`}
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

              <span className={`gh-hamburger ${isMobileMenuOpen ? "active" : ""}`}>
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

        <Link to="/accommondations" onClick={closeMobileMenu}>ACCOMMODATIONS</Link>

        <Link to="/shibui" onClick={closeMobileMenu}>SHIBUI SPA</Link>

        <Link to="/dining" onClick={closeMobileMenu}>DINING</Link>

        <Link to="/poolgym" onClick={closeMobileMenu}>POOL & GYM</Link>

        <Link to="/drawing" onClick={closeMobileMenu}>DRAWING ROOM & COURTYARD</Link>

        <Link to="/gallery" onClick={closeMobileMenu}>GALLERIES</Link>

        <Link to="/neigh" onClick={closeMobileMenu}>NEIGHBORHOOD</Link>

        <Link to="/press" onClick={closeMobileMenu}>PRESS</Link>

      </nav>

    </header>
  );
}