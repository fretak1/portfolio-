"use client";

import { developer } from "@/lib/data";
import styles from "./Contact.module.css";
import { SiGithub, SiInstagram, SiTelegram, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {

    const socials = [
        { icon: <SiGithub size={20} />, url: developer.contact.github, label: "GitHub" },
        { icon: <FaLinkedin size={20} />, url: developer.contact.linkedin, label: "LinkedIn" },
        { icon: <SiInstagram size={20} />, url: developer.contact.instagram, label: "Instagram" },
        { icon: <SiTelegram size={20} />, url: developer.contact.telegram, label: "Telegram" },
        { icon: <SiGmail size={20} />, url: `mailto:${developer.contact.email}`, label: developer.contact.email },
    ];

    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <div className={styles.contactContainer}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoText}>
                            <h3 className={styles.infoTitle}>Let's talk about your project</h3>
                            <p className={styles.infoDesc}>
                                I'm always open to new opportunities and collaborations. Feel free to reach out!
                            </p>
                            
                            <div className={styles.socialGrid}>
                                {socials.map((social, idx) => (
                                    <a 
                                        key={idx} 
                                        href={social.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={styles.socialLink}
                                        aria-label={social.label}
                                    >
                                        <span className={styles.socialIcon}>{social.icon}</span>
                                        <span className={styles.socialName}>{social.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <form 
                        className={styles.form} 
                        action="https://api.web3forms.com/submit" 
                        method="POST"
                    >
                        {/* Web3Forms Access Key - Get your free key at https://web3forms.com/ */}
                        <input type="hidden" name="access_key" value="07a48070-458c-46a0-a113-e8732682eb7e" />
                        
                        {/* Optional: Redirect users to a custom success page */}
                        <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
