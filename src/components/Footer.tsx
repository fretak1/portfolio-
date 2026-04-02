import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>
                        © {currentYear} Frezer Takele. All rights reserved.
                    </p>
                    <div className={styles.links}>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
