import { developer } from "@/lib/data";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Hi, I'm <span className="text-gradient">{developer.name}</span>
                    </h1>
                    <h2 className={styles.subtitle}>{developer.title}</h2>
                    <p className={styles.tagline}>{developer.tagline}</p>
                    <div className={styles.actions}>
                        <a href="#projects" className={styles.primaryBtn}>View Projects</a>
                        <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
                    </div>
                </div>
                <div className={styles.illustration}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={developer.profileImage}
                            alt={developer.name}
                            width={400}
                            height={400}
                            className={styles.heroImage}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
