import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState({
        code: 'en',
        name: 'ENGLISH',
        flag: 'https://flagcdn.com/w20/us.png'
    });
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    const languages = [
        { code: 'en', name: 'ENGLISH', flag: 'https://flagcdn.com/w20/us.png' },
        { code: 'es', name: 'ESPAÑOL', flag: 'https://flagcdn.com/w20/es.png' },
        { code: 'fr', name: 'FRANÇAIS', flag: 'https://flagcdn.com/w20/fr.png' },
        { code: 'de', name: 'DEUTSCH', flag: 'https://flagcdn.com/w20/de.png' },
        { code: 'it', name: 'ITALIANO', flag: 'https://flagcdn.com/w20/it.png' },
        { code: 'pt', name: 'PORTUGUÊS', flag: 'https://flagcdn.com/w20/pt.png' },
        { code: 'zh', name: '中文', flag: 'https://flagcdn.com/w20/cn.png' }
    ];

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setShowLanguageDropdown(false);
        console.log('Language selected:', language); // For testing
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showLanguageDropdown && !event.target.closest('.language-selector')) {
                setShowLanguageDropdown(false);
            }
        };

        if (showLanguageDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showLanguageDropdown]);

    return (
        <>
            <footer className="custom-footer">
                <div className="container">
                    <div className="footer-content">
                        {/* Logo */}
                        <div className="footer-logo">
                            <div className="footer-logo-text">
                                <img src="https://www.thegreenwichhotel.com/wp-content/themes/greenwich/assets/images/ui/logo-gh.svg" alt="Greenwich Hotel Logo" />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="footer-address">
                            <div className="address-icon">📍</div>
                            <div className="address-text">
                                <div>377 GREENWICH STREET,</div>
                                <div>NEW YORK NY 10013</div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="footer-phone">
                            <div className="phone-icon">📞</div>
                            <div className="phone-text">
                                <a href="tel:+12129418900">212.941.8900</a>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="footer-divider"></div>

                        {/* Email Links */}
                        <div className="footer-emails">
                            <div className="email-item">
                                <span className="email-icon">✉</span>
                                <a href="mailto:frontdesk@thegreenwichhotel.com">FRONTDESK@THEGREENWICHHOTEL.COM</a>
                            </div>
                            <div className="email-item">
                                <span className="email-icon">✉</span>
                                <a href="mailto:reservations@thegreenwichhotel.com">RESERVATIONS@THEGREENWICHHOTEL.COM</a>
                            </div>
                            <div className="email-item">
                                <span className="email-icon">✉</span>
                                <a href="mailto:shibui@thegreenwichhotel.com">SHIBUI@THEGREENWICHHOTEL.COM</a>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="footer-divider"></div>

                        {/* Links */}
                        <div className="footer-links">
                            <a href="/ada">ADA</a>
                            <a href="/careers">CAREERS</a>
                            <a href="/privacy">PRIVACY POLICY</a>
                            <a href="/terms">TERMS & CONDITIONS</a>
                        </div>

                        {/* Divider */}
                        <div className="footer-divider"></div>

                        {/* Bottom Section */}
                        <div className="footer-bottom">
                            <div className="social-icons">
                                <a href="https://instagram.com/thegreenwichhotel" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" />
                                    </svg>
                                </a>
                                <a href="https://facebook.com/thegreenwichhotel" target="_blank" rel="noopener noreferrer" className="social-icon facebook-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/greenwichhotel" target="_blank" rel="noopener noreferrer" className="social-icon twitter-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>

                            <div className="leading-hotels">
                                <div className="leading-hotels-logo">
                                    <div className="lh-text">
                                        <span className="lh-leading">LEADING</span>
                                        <span className="lh-hotels">HOTELS</span>
                                    </div>
                                    <div className="lh-subtitle">OF THE WORLD</div>
                                </div>
                            </div>

                            <div className="language-selector">
                                <div
                                    className="language-dropdown"
                                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                >
                                    <img
                                        src={selectedLanguage.flag}
                                        alt={`${selectedLanguage.name} Flag`}
                                        className="flag-icon"
                                    />
                                    <span>{selectedLanguage.name}</span>
                                    <span className={`dropdown-arrow ${showLanguageDropdown ? 'open' : ''}`}>▼</span>
                                </div>

                                {showLanguageDropdown && (
                                    <div className="language-dropdown-menu">
                                        {languages.map((language) => (
                                            <div
                                                key={language.code}
                                                className={`language-option ${selectedLanguage.code === language.code ? 'selected' : ''}`}
                                                onClick={() => handleLanguageSelect(language)}
                                            >
                                                <img
                                                    src={language.flag}
                                                    alt={`${language.name} Flag`}
                                                    className="flag-icon"
                                                />
                                                <span>{language.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="footer-copyright">
                    <div className="container">
                        <div className="copyright-content">
                            <p>&copy; {new Date().getFullYear()} The Greenwich Hotel. All rights reserved.</p>
                            <p>Designed with luxury and comfort in mind.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}