"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [theme, setTheme] = useState("light");
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            setScrollPercent(progress);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isMobileMenuOpen ? styles.menuOpen : ""}`}>
            {/* Top Page Scroll Progress Indicator */}
            <div 
                className={styles.scrollProgress} 
                style={{ width: `${scrollPercent}%` }} 
            />

            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
                    Fretak
                </Link>
                
                {/* Mobile Menu Backdrop Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div 
                            className={styles.backdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMobileMenu}
                        />
                    )}
                </AnimatePresence>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navActive : ""}`}>
                    <a href="#about" className={styles.navLink} onClick={closeMobileMenu}>About</a>
                    <a href="#skills" className={styles.navLink} onClick={closeMobileMenu}>Skills</a>
                    <a href="#projects" className={styles.navLink} onClick={closeMobileMenu}>Projects</a>
                    <a href="#experience" className={styles.navLink} onClick={closeMobileMenu}>Experience</a>
                    <a href="#contact" className={styles.navLink} onClick={closeMobileMenu}>Contact</a>
                </nav>

                <div className={styles.actions}>
                    <motion.button 
                        onClick={toggleTheme} 
                        className={styles.themeToggle} 
                        aria-label="Toggle Theme"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </motion.button>

                    <button 
                        onClick={toggleMobileMenu} 
                        className={styles.menuToggle} 
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
