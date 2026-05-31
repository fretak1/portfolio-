"use client";

import { useState, useEffect } from "react";
import { developer } from "@/lib/data";
import styles from "./About.module.css";
import { Award, Download, GraduationCap, User, Terminal as TerminalIcon, Sparkles, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const end = value;
        if (end === 0) return;
        const totalMiliseconds = duration * 1000;
        const incrementTime = totalMiliseconds / end;
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);
        return () => clearInterval(timer);
    }, [value, duration]);
    return <>{count}</>;
};

const TypewriterText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 20);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <span className={styles.typewriter}>
            {displayedText}
            <span className={styles.cursor}>|</span>
        </span>
    );
};

export default function About() {
    const [localTime, setLocalTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            // East Africa Time (EAT) is UTC+3
            const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
            const eat = new Date(utc + (3600000 * 3));
            
            let hours = eat.getHours();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            const minutes = eat.getMinutes().toString().padStart(2, '0');
            const seconds = eat.getSeconds().toString().padStart(2, '0');
            
            setLocalTime(`${hours}:${minutes}:${seconds} ${ampm} EAT`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const personaCode = `{
  "role": "Full-Stack Engineer",
  "education": "B.Sc. Computer Engineering",
  "focus": ["Scalability", "API Design", "Optimization"],
  "editor": "VS Code / Vim",
  "status": "Active & Seeking Opportunities"
}`;

    return (
        <section id="about" className={styles.about}>
            {/* Ambient Background Gradient Blobs */}
            <div className={styles.glowBlob1}></div>
            <div className={styles.glowBlob2}></div>

            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.sectionTitle}>Profile Dashboard</h2>
                    <p className={styles.subtitle}>Get to know the developer, skills, education, and professional background in details.</p>
                </motion.div>

                {/* Bento Grid */}
                <div className={styles.bentoGrid}>
                    
                    {/* Cell 1: Bio & Summary (Span 2 cols) */}
                    <motion.div 
                        className={`${styles.gridCard} ${styles.bioCard}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.cardHeader}>
                            <User className={styles.cardIcon} size={20} />
                            <h3 className={styles.cardTitle}>Professional Biography</h3>
                        </div>
                        <p className={styles.bioText}>{developer.bio}</p>
                        <div className={styles.badgeRow}>
                            <span className={styles.profileBadge}>Clean Code</span>
                            <span className={styles.profileBadge}>Problem Solver</span>
                            <span className={styles.profileBadge}>Performance Tuning</span>
                            <span className={styles.profileBadge}>Fullstack Architect</span>
                        </div>
                    </motion.div>

                    {/* Cell 2: Live Local Time & Location (Span 1 col) */}
                    <motion.div 
                        className={`${styles.gridCard} ${styles.locationCard}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <div className={styles.cardHeader}>
                            <MapPin className={styles.cardIcon} size={20} />
                            <h3 className={styles.cardTitle}>Location & Time</h3>
                        </div>
                        <div className={styles.locationContent}>
                            <p className={styles.locName}>Bahir Dar, Ethiopia</p>
                            <p className={styles.locDesc}>Open for relocation & remote roles globally.</p>
                            
                            <div className={styles.timeWrapper}>
                                <Clock size={16} className={styles.timeIcon} />
                                <span className={styles.timeVal}>{localTime}</span>
                            </div>
                        </div>
                        <div className={styles.availableBadge}>
                            <span className={styles.statusIndicator}></span>
                            Available Immediately
                        </div>
                    </motion.div>

                    {/* Cell 3: JSON Persona Terminal (Span 1 col, 2 rows height) */}
                    <motion.div 
                        className={`${styles.gridCard} ${styles.terminalCard}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className={styles.terminalHeader}>
                            <div className={styles.terminalDots}>
                                <span></span><span></span><span></span>
                            </div>
                            <span className={styles.terminalTitle}>
                                <TerminalIcon size={12} />
                                frezer.json
                            </span>
                        </div>
                        <div className={styles.terminalContent}>
                            <pre className={styles.codeBlock}>
                                <TypewriterText text={personaCode} />
                            </pre>
                        </div>
                    </motion.div>

                    {/* Cell 4: Experience / Metrics Numbers (Span 1 col) */}
                    <motion.div 
                        className={`${styles.gridCard} ${styles.statsCard}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <div className={styles.cardHeader}>
                            <Sparkles className={styles.cardIcon} size={20} />
                            <h3 className={styles.cardTitle}>Metrics</h3>
                        </div>
                        <div className={styles.statsGrid}>
                            <div className={styles.statBox}>
                                <span className={styles.statNum}><Counter value={1} />+</span>
                                <span className={styles.statLbl}>Years Exp</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statNum}><Counter value={6} />+</span>
                                <span className={styles.statLbl}>Completed Projects</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cell 5: Education (Span 1 col) */}
                    <motion.div 
                        className={`${styles.gridCard} ${styles.educationCard}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className={styles.cardHeader}>
                            <GraduationCap className={styles.cardIcon} size={20} />
                            <h3 className={styles.cardTitle}>Education</h3>
                        </div>
                        <div className={styles.educationContent}>
                            <h4 className={styles.institution}>Bahir Dar University</h4>
                            <p className={styles.degree}>B.Sc. Computer Engineering</p>
                            <span className={styles.period}>2022 - 2026</span>
                            <p className={styles.eduDetails}>Focused on systems programming, network security, database architectures, and engineering logic.</p>
                        </div>
                    </motion.div>

                    {/* Cell 6: Verified Credentials & Certificates (Span 2 cols) */}
                    <motion.div 
                        className={`${styles.gridCard} ${styles.certsCard}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                    >
                        <div className={styles.cardHeader}>
                            <Award className={styles.cardIcon} size={20} />
                            <h3 className={styles.cardTitle}>Industry Certifications</h3>
                        </div>
                        <div className={styles.certsGrid}>
                            {developer.certificates && developer.certificates.map((cert: any, index: number) => (
                                <div key={index} className={styles.certRow}>
                                    <div className={styles.certInfo}>
                                        <h4 className={styles.certName}>{cert.title}</h4>
                                        <p className={styles.certMeta}>{cert.issuer} • {cert.year}</p>
                                    </div>
                                    {cert.downloadLink && (
                                        <a 
                                            href={cert.downloadLink} 
                                            className={styles.downloadBtn} 
                                            download
                                            aria-label={`Download ${cert.title}`}
                                        >
                                            <Download size={14} />
                                            <span>PDF</span>
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
