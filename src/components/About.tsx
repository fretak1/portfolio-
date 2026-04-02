"use client";

import { useState, useEffect } from "react";
import { developer } from "@/lib/data";
import styles from "./About.module.css";
import { Award, Download, GraduationCap, User, Terminal as TerminalIcon, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const end = value;
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
            }, 30);
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
    const [activeTab, setActiveTab] = useState("bio");

    const tabs = [
        { id: "bio", label: "Bio", icon: <User size={18} /> },
        { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
        { id: "certificates", label: "Certificates", icon: <Award size={18} /> },
    ];

    const personaCode = `{
  "role": "Full-Stack Developer",
  "passion": "Building scalable web apps",
  "motto": "Code with purpose, design with empathy",
  "status": "Available for innovative projects",
  "location": "Global / Remote"
}`;

    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.sectionTitle}>About Me</h2>
                </motion.div>

                <div className={styles.aboutContent}>
                    <div className={styles.bioSection}>
                        <div className={styles.tabsContainer}>
                            <div className={styles.tabs}>
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`${styles.tabLink} ${activeTab === tab.id ? styles.active : ""}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <span className={styles.tabIcon}>{tab.icon}</span>
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <motion.div 
                                                layoutId="activeTab"
                                                className={styles.activeTabBg}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.tabContentWrapper}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className={styles.tabContent}
                                >
                                    {activeTab === "bio" && (
                                        <div className={styles.bioTab}>
                                            <p className={styles.bioText}>{developer.bio}</p>
                                            <div className={styles.statsGrid}>
                                                <div className={styles.statCard}>
                                                    <div className={styles.statValue}>
                                                        <Counter value={1} />+
                                                    </div>
                                                    <div className={styles.statLabel}>Years Experience</div>
                                                </div>
                                                <div className={styles.statCard}>
                                                    <div className={styles.statValue}>
                                                        <Counter value={6} />+
                                                    </div>
                                                    <div className={styles.statLabel}>Success Projects</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "education" && (
                                        <div className={styles.educationTab}>
                                            <div className={styles.timeline}>
                                                {developer.education && developer.education.map((edu: any, index: number) => (
                                                    <motion.div 
                                                        key={index} 
                                                        className={styles.timelineItem}
                                                        initial={{ opacity: 0, x: -50 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <div className={styles.timelineDot}></div>
                                                        <div className={styles.timelineContent}>
                                                            <h3 className={styles.eduInstitution}>{edu.institution}</h3>
                                                            <p className={styles.eduDegree}>{edu.degree}</p>
                                                            <span className={styles.eduPeriod}>{edu.period}</span>
                                                            <p className={styles.eduDescription}>{edu.description}</p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "certificates" && (
                                        <div className={styles.certificatesTab}>
                                            <div className={styles.certGrid}>
                                                {developer.certificates && developer.certificates.map((cert: any, index: number) => (
                                                    <motion.div 
                                                        key={index} 
                                                        className={styles.certCard}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        whileHover={{ y: -5 }}
                                                        transition={{ delay: index * 0.05 }}
                                                    >
                                                        <div className={styles.certHeader}>
                                                            <div className={styles.certIconWrapper}>
                                                                <Award size={20} />
                                                            </div>
                                                            <span className={styles.certYear}>{cert.year}</span>
                                                        </div>
                                                        <div className={styles.certBody}>
                                                            <h3 className={styles.certTitle}>{cert.title}</h3>
                                                            <p className={styles.certIssuer}>{cert.issuer}</p>
                                                        </div>
                                                        {cert.downloadLink && (
                                                            <a 
                                                                href={cert.downloadLink} 
                                                                className={styles.certLink}
                                                                download
                                                            >
                                                                Download
                                                                <ArrowRight size={16} />
                                                            </a>
                                                        )}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className={styles.mediaSection}>
                        <motion.div 
                            className={styles.terminalWindow}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={styles.terminalHeader}>
                                <div className={styles.terminalDots}>
                                    <span></span><span></span><span></span>
                                </div>
                                <div className={styles.terminalTitle}>
                                    <TerminalIcon size={14} />
                                    developer_persona.json
                                </div>
                            </div>
                            <div className={styles.terminalContent}>
                                <pre className={styles.codeBlock}>
                                    <TypewriterText text={personaCode} />
                                </pre>
                            </div>
                        </motion.div>
                        
                        {/* Interactive floating elements */}
                        <motion.div 
                            className={styles.floatingBadges}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                "Problem Solver",
                                "Detail Oriented",
                                "Quick Learner",
                                "Clean Coder"
                            ].map((text, idx) => (
                                <motion.div 
                                    key={idx}
                                    className={styles.floatingBadge}
                                    variants={{
                                        hidden: { opacity: 0, y: 20, scale: 0.8 },
                                        visible: { 
                                            opacity: 1, 
                                            y: 0, 
                                            scale: 1,
                                            transition: { type: "spring", stiffness: 100 }
                                        }
                                    }}
                                    whileHover={{ 
                                        y: -5,
                                        x: (idx % 2 === 0 ? 5 : -5),
                                        scale: 1.05,
                                        transition: { type: "spring", stiffness: 400, damping: 10 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {text}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
