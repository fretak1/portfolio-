"use client";

import { developer } from "@/lib/data";
import styles from "./Hero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiNodedotjs, SiPostgresql, SiTypescript } from "react-icons/si";
import { ArrowDown, Mail, Briefcase } from "lucide-react";

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Shifting Gradient Background Orbs */}
            <div className={styles.orb1}></div>
            <div className={styles.orb2}></div>
            
            <div className={`container ${styles.heroContainer}`}>
                <motion.div 
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div 
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className={styles.pulseDot}></span>
                        Available for Full-time & Remote Roles
                    </motion.div>

                    <h1 className={styles.title}>
                        Hi, I'm <span className="text-gradient">{developer.name}</span>
                    </h1>
                    <h2 className={styles.subtitle}>{developer.title}</h2>
                    <p className={styles.tagline}>{developer.tagline}</p>
                    
                    <div className={styles.actions}>
                        <motion.a 
                            href="#projects" 
                            className={styles.primaryBtn}
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Briefcase size={20} />
                            View Projects
                        </motion.a>
                        <motion.a 
                            href="#contact" 
                            className={styles.secondaryBtn}
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Mail size={20} />
                            Contact Me
                        </motion.a>
                    </div>

                    <div className={styles.socialStats}>
                        <div className={styles.socialLink}>
                            <strong>1+</strong> Yrs Experience
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.socialLink}>
                            <strong>6+</strong> Projects Completed
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.socialLink}>
                            <strong>6+</strong> Certifications
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className={styles.illustration}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.imageWrapper}>
                        {/* Shifting decorative border frame */}
                        <div className={styles.imageFrame}></div>
                        
                        <Image
                            src={developer.profileImage}
                            alt={developer.name}
                            width={400}
                            height={400}
                            className={styles.heroImage}
                            priority
                        />

                        {/* Floating Labels */}
                        <motion.div 
                            className={styles.floatingLabel1}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            🚀 Fullstack Architect
                        </motion.div>

                        <motion.div 
                            className={styles.floatingLabel2}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            ☕ Code Quality Focused
                        </motion.div>

                        {/* Orbiting Tech Icons */}
                        <motion.div 
                            className={`${styles.techIcon} ${styles.reactIcon}`}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <SiReact size={24} />
                        </motion.div>

                        <motion.div 
                            className={`${styles.techIcon} ${styles.nextIcon}`}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <SiNextdotjs size={24} />
                        </motion.div>

                        <motion.div 
                            className={`${styles.techIcon} ${styles.nodeIcon}`}
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        >
                            <SiNodedotjs size={24} />
                        </motion.div>

                        <motion.div 
                            className={`${styles.techIcon} ${styles.postgresIcon}`}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <SiPostgresql size={24} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.a 
                href="#about" 
                className={styles.scrollIndicator}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                aria-label="Scroll to About section"
            >
                <ArrowDown size={18} />
            </motion.a>
        </section>
    );
}
