import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="gh-header">
      <div className="container-fluid">
        <div className="gh-header-content">
          <div className="gh-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img
              src="https://www.thegreenwichhotel.com/wp-content/themes/greenwich/assets/images/ui/logo-gh.svg"
              alt="Greenwich Hotel"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="gh-desktop-nav">
            <a href="/accommondations" className={`gh-nav-link ${location.pathname === '/accommondations' ? 'active' : ''}`}>ACCOMMODATIONS</a>
            <a href="/shibui" className={`gh-nav-link ${location.pathname === '/shibui' ? 'active' : ''}`}>SHIBUI SPA</a>
            <a href="/dining" className={`gh-nav-link ${location.pathname === '/dining' ? 'active' : ''}`}>DINING</a>
            <a href="/poolgym" className={`gh-nav-link ${location.pathname === '/poolgym' ? 'active' : ''}`}>POOL & GYM</a>
            <a href="/drawing" className={`gh-nav-link ${location.pathname === '/drawing' ? 'active' : ''}`}>DRAWING ROOM & COURTYARD</a>
            <a href="/gallery" className={`gh-nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>GALLERIES</a>
            <a href="/neigh" className={`gh-nav-link ${location.pathname === '/neigh' ? 'active' : ''}`}>NEIGHBORHOOD</a>
            <a href="/press" className={`gh-nav-link ${location.pathname === '/press' ? 'active' : ''}`}>PRESS</a>
          </nav>

          <div className="gh-header-right">
            <button className="gh-reserve-btn">RESERVE</button>

            <div className="gh-leaders-club">
              <img
                src="https://www.thegreenwichhotel.com/wp-content/themes/greenwich/assets/images/ui/logo-leaders-club.png"
                alt="Leaders Club"
              />
            </div>

            <button className="gh-mobile-menu-btn" onClick={toggleMobileMenu}>
              <span className={`gh-hamburger ${isMobileMenuOpen ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`gh-mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
        <a href="/accommondations" className={location.pathname === '/accommondations' ? 'active' : ''} onClick={toggleMobileMenu}>ACCOMMODATIONS</a>
        <a href="/shibui" className={location.pathname === '/shibui' ? 'active' : ''} onClick={toggleMobileMenu}>SHIBUI SPA</a>
        <a href="/dining" className={location.pathname === '/dining' ? 'active' : ''} onClick={toggleMobileMenu}>DINING</a>
        <a href="/poolgym" className={location.pathname === '/poolgym' ? 'active' : ''} onClick={toggleMobileMenu}>POOL & GYM</a>
        <a href="/drawing" className={location.pathname === '/drawing' ? 'active' : ''} onClick={toggleMobileMenu}>DRAWING ROOM & COURTYARD</a>
        <a href="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={toggleMobileMenu}>GALLERIES</a>
        <a href="/neigh" className={location.pathname === '/neigh' ? 'active' : ''} onClick={toggleMobileMenu}>NEIGHBORHOOD</a>
        <a href="/press" className={location.pathname === '/press' ? 'active' : ''} onClick={toggleMobileMenu}>PRESS</a>
      </nav>
    </header>
  );
}