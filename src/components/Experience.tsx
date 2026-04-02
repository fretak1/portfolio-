import { developer } from "@/lib/data";
import styles from "./Experience.module.css";

export default function Experience() {
    return (
        <section id="experience" className={`${styles.experience} reveal`}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Experience</h2>
                <div className={styles.timeline}>
                    {developer.experience.map((exp, idx) => (
                        <div key={idx} className={styles.timelineItem}>
                            <div className={styles.timelinePoint}></div>
                            <div className={styles.timelineContent}>
                                <div className={styles.header}>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <span className={styles.company}>{exp.company}</span>
                                </div>
                                <span className={styles.period}>{exp.period}</span>
                                <p className={styles.desc}>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
