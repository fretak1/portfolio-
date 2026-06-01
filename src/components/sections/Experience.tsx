"use client";

import { useState } from "react";
import { developer } from "@/lib/data";
import styles from "./Experience.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Briefcase, Award } from "lucide-react";

export default function Experience() {
    const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

    const toggleExpand = (idx: number) => {
        setExpandedIdx(expandedIdx === idx ? null : idx);
    };

    // Sub-accomplishments for interactive expansion
    const accomplishments = [
        [
            "Built responsive, dynamic customer-facing layouts using Next.js and CSS Modules.",
            "Formulated relational PostgreSQL database architectures and optimized search query indexes.",
            "Integrated secure third-party payment workflows and state containers for reliable client sites."
        ],
        [
            "Created a bidirectional WebSocket messaging shell using Socket.io and Node.js.",
            "Authored robust REST API route schemas with Express.js and tested system resilience under load.",
            "Acquired practical experience in agile team ceremonies, Git version control, and codebase refactoring."
        ],
        [
            "Configured routers, network subnet paths, and diagnosed connectivity bottlenecks.",
            "Performed physical hardware server maintenance and diagnosed local network loop issues.",
            "Mapped networking architecture fundamentals to build more latency-resilient web protocols."
        ]
    ];

    return (
        <section id="experience" className={styles.experience}>
            <div className="container">
                <motion.div 
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Work Experience</h2>
                    <p className={styles.subtitle}>My professional pathway, combining internships and engineering roles.</p>
                </motion.div>

                <div className={styles.timeline}>
                    {developer.experience.map((exp, idx) => {
                        const isExpanded = expandedIdx === idx;
                        return (
                            <div key={idx} className={styles.timelineItem}>
                                <div className={styles.timelinePoint}>
                                    <Briefcase size={12} />
                                </div>
                                <motion.div 
                                    className={`${styles.timelineContent} ${isExpanded ? styles.expandedCard : ""}`}
                                    onClick={() => toggleExpand(idx)}
                                    layout
                                    whileHover={{ x: 6 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    <div className={styles.cardHeader}>
                                        <div className={styles.roleHeader}>
                                            <h3 className={styles.role}>{exp.role}</h3>
                                            <span className={styles.company}>{exp.company}</span>
                                        </div>
                                        <div className={styles.metaInfo}>
                                            <span className={styles.period}>
                                                <Calendar size={12} className={styles.icon} />
                                                {exp.period}
                                            </span>
                                            <motion.div 
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                className={styles.expandArrow}
                                            >
                                                <ChevronDown size={18} />
                                            </motion.div>
                                        </div>
                                    </div>
                                    
                                    <p className={styles.desc}>{exp.description}</p>

                                    <AnimatePresence initial={false}>
                                        {isExpanded && (
                                            <motion.div 
                                                className={styles.expandableBlock}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className={styles.divider}></div>
                                                <h4 className={styles.bulletsTitle}>Key Contributions:</h4>
                                                <ul className={styles.bulletsList}>
                                                    {accomplishments[idx].map((item, bIdx) => (
                                                        <li key={bIdx} className={styles.bulletItem}>
                                                            <span className={styles.bulletDot}></span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
