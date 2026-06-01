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

                      
                    </div>
                </motion.div>
            </div>

           
        </section>
    );
}
