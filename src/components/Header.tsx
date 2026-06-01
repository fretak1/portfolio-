"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
    const [theme, setTheme] = useState("light");
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

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

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            {/* Top Page Scroll Progress Indicator */}
            <div 
                className={styles.scrollProgress} 
                style={{ width: `${scrollPercent}%` }} 
            />

            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    Fretak
                </Link>
                <nav className={styles.nav}>
                    <a href="#about" className={styles.navLink}>About</a>
                    <a href="#skills" className={styles.navLink}>Skills</a>
                    <a href="#projects" className={styles.navLink}>Projects</a>
                    <a href="#experience" className={styles.navLink}>Experience</a>
                    <a href="#contact" className={styles.navLink}>Contact</a>
                </nav>
                <motion.button 
                    onClick={toggleTheme} 
                    className={styles.themeToggle} 
                    aria-label="Toggle Theme"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </motion.button>
            </div>
        </header>
    );
}
