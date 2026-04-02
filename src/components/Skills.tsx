"use client";

import { developer } from "@/lib/data";
import styles from "./Skills.module.css";
import { Database, Layout, Server, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
    const categories = [
        { 
            name: "Frontend", 
            items: developer.skills.frontend,
            icon: <Layout className={styles.icon} />,
            color: "--frontend-accent"
        },
        { 
            name: "Backend", 
            items: developer.skills.backend,
            icon: <Server className={styles.icon} />,
            color: "--backend-accent"
        },
        { 
            name: "Databases", 
            items: developer.skills.databases,
            icon: <Database className={styles.icon} />,
            color: "--database-accent"
        },
        { 
            name: "DevOps & Tools", 
            items: developer.skills.devops,
            icon: <Settings className={styles.icon} />,
            color: "--devops-accent"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            },
        },
    };

    return (
        <section id="skills" className={styles.skills}>
            <div className="container">
                <motion.div 
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
                    <p className={styles.subtitle}>A comprehensive toolkit I use to bring ideas to life with modern standards.</p>
                </motion.div>
                
                <motion.div 
                    className={styles.skillsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {categories.map((cat, idx) => (
                        <motion.div 
                            key={idx} 
                            className={styles.skillCard}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            style={{ "--accent": `var(${cat.color})` } as any}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconContainer}>
                                    {cat.icon}
                                    <div className={styles.iconGlow}></div>
                                </div>
                                <h3 className={styles.categoryTitle}>{cat.name}</h3>
                            </div>

                            <div className={styles.skillList}>
                                {cat.items.map((skill, sIdx) => (
                                    <motion.span 
                                        key={sIdx} 
                                        className={styles.skillItem}
                                        whileHover={{ scale: 1.05, x: 5 }}
                                    >
                                        <span className={styles.dot}></span>
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                            
                            {/* Decorative Background Icon */}
                            <div className={styles.bgIcon}>
                                {cat.icon}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
