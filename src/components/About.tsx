"use client";

import { useState, useEffect } from "react";
import { developer } from "@/lib/data";
import styles from "./About.module.css";
import { Award, Download, GraduationCap, MapPin, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

    return (
        <section id="about" className={styles.about}>
            {/* Ambient Background Gradient Blobs */}
            <div className={styles.glowBlob1}></div>
            <div className={styles.glowBlob2}></div>

            <div className="container">
                

                {/* Split Column Layout */}
                <div className={styles.aboutSplit}>
                    
                    {/* Left Column: Bio & Education Timeline */}
                    <motion.div 
                        className={styles.leftColumn}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={styles.bioSection}>
                            <h3 className={styles.columnTitle}>
                                About Me
                            </h3>
                            <p className={styles.bioText}>{developer.bio}</p>
                            <div className={styles.badgeRow}>
                                <span className={styles.profileBadge}>Clean Code</span>
                                <span className={styles.profileBadge}>Problem Solver</span>
                                <span className={styles.profileBadge}>Performance Tuning</span>
                                <span className={styles.profileBadge}>Fullstack Architect</span>
                            </div>
                        </div>

                        <div className={styles.educationSection}>
                            <h3 className={styles.columnTitle}>
                                <GraduationCap className={styles.titleIcon} size={22} />
                                Education
                            </h3>
                            <div className={styles.timeline}>
                                {developer.education && developer.education.map((edu: any, index: number) => (
                                    <div key={index} className={styles.timelineItem}>
                                        <div className={styles.timelineNode}></div>
                                        <div className={styles.timelineContent}>
                                            <span className={styles.eduPeriod}>{edu.period}</span>
                                            <h4 className={styles.eduDegree}>{edu.degree}</h4>
                                            <span className={styles.eduInstitution}>{edu.institution}</span>
                                            <p className={styles.eduDesc}>{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Credentials & Live Status Card */}
                    <motion.div 
                        className={styles.rightColumn}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={styles.profileCard}>
                            

                            {/* Location & Time details */}
                            <div className={styles.cardGroup}>
                                <div className={styles.metaRow}>
                                    <MapPin className={styles.metaIcon} size={18} />
                                    <div className={styles.metaInfo}>
                                        <span className={styles.metaLabel}>Location</span>
                                        <span className={styles.metaValue}>Bahir Dar, Ethiopia</span>
                                        <span className={styles.metaSub}>Open for relocation & remote roles globally</span>
                                    </div>
                                </div>
                                
                            </div>

                            {/* Metrics display */}
                            <div className={styles.cardGroup}>
                                <div className={styles.statsGrid}>
                                    <div className={styles.statItem}>
                                        <span className={styles.statNum}><Counter value={1} />+</span>
                                        <span className={styles.statLabel}>Years Exp</span>
                                    </div>
                                    <div className={styles.statItem}>
                                        <span className={styles.statNum}><Counter value={6} />+</span>
                                        <span className={styles.statLabel}>Projects Done</span>
                                    </div>
                                </div>
                            </div>

                            {/* Verified Credentials */}
                            <div className={styles.cardGroupLast}>
                                <h4 className={styles.certsTitle}>
                                    <Award className={styles.certsIcon} size={18} />
                                    Industry Certifications
                                </h4>
                                <div className={styles.certsList}>
                                    {developer.certificates && developer.certificates.map((cert: any, index: number) => (
                                        <div key={index} className={styles.certItem}>
                                            <div className={styles.certInfo}>
                                                <span className={styles.certName}>{cert.title}</span>
                                                <span className={styles.certIssuer}>{cert.issuer} • {cert.year}</span>
                                            </div>
                                            {cert.downloadLink && (
                                                <a 
                                                    href={cert.downloadLink} 
                                                    className={styles.downloadBtn} 
                                                    download
                                                    aria-label={`Download ${cert.title}`}
                                                >
                                                    <Download size={13} />
                                                    <span>PDF</span>
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
