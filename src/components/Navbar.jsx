import {useState, useEffect} from "react";
import "../CSS/Navbar.css";

const Navbar = ({toggleDarkMode, darkMode}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.querySelector('.navbar');
            const navLinks = document.querySelector('.nav-links');
            
            if (isOpen && navbar && navLinks && 
                !navbar.contains(event.target) && 
                !navLinks.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleNavClick = (e) => {
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                setIsOpen(false); // Close mobile menu after clicking
            }
        }
    };

    const toggleMobileMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleDarkModeToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleDarkMode();
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">Ratna Chaplot</div>

                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><a href="#home" onClick={handleNavClick}>Home</a></li>
                    <li><a href="#about" onClick={handleNavClick}>About</a></li>
                    <li><a href="#education" onClick={handleNavClick}>Education</a></li>
                    <li><a href="#experience" onClick={handleNavClick}>Experience</a></li>
                    <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
                    <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
                    <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
                </ul>

                <div className="nav-buttons">
                    {/* Resume Download Button */}
                    <a 
                        href="/src/assets/resume/resume.pdf" 
                        download="Ratna_Chaplot_Resume.pdf"
                        className="resume-btn"
                        aria-label="Download Resume"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        <span>Resume</span>
                    </a>

                    {/* Dark Mode Toggle */}
                    <button 
                        className="dark-btn" 
                        onClick={handleDarkModeToggle} 
                        aria-label="Toggle Dark Mode"
                        type="button"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="mobile-btn" 
                        onClick={toggleMobileMenu} 
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                        type="button"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Overlay for mobile menu */}
            {isOpen && (
                <div 
                    className={`nav-overlay ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;