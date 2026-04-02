"use client";

import { developer } from "@/lib/data";
import Image from "next/image";
import styles from "./Projects.module.css";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion, Variants } from "framer-motion";

export default function Projects() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <motion.div 
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Featured Projects</h2>
                    <p className={styles.subtitle}>A selection of my best work, curated from various technical challenges and professional experiences.</p>
                </motion.div>

                <motion.div 
                    className={styles.projectsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {developer.projects.map((project, idx) => (
                        <motion.div 
                            key={idx} 
                            className={styles.projectCard}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -12,
                                rotateX: 2,
                                rotateY: -2,
                                transition: { duration: 0.3 }
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.projectImage}
                                    priority={idx < 2}
                                />
                                <div className={styles.imageOverlay}>
                                    <div className={styles.links}>
                                        <motion.a 
                                            href={project.demoLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={styles.linkIcon}
                                            aria-label="Live Demo"
                                        >
                                            <ExternalLink size={22} />
                                        </motion.a>
                                        <motion.a 
                                            href={project.githubLink} 
                                            id={`project-github-${idx}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={styles.linkIcon}
                                            aria-label="GitHub Repository"
                                        >
                                            <SiGithub size={22} />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectHeader}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <ArrowRight className={styles.titleIcon} size={20} />
                                </div>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <div className={styles.techStack}>
                                    {project.tech.map((tech, tIdx) => (
                                        <motion.span 
                                            key={tIdx} 
                                            className={styles.techItem}
                                            whileHover={{ y: -2, scale: 1.05 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
