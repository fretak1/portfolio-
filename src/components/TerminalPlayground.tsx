"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./TerminalPlayground.module.css";
import { Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { developer } from "@/lib/data";

interface HistoryItem {
    command: string;
    output: string | React.ReactNode;
}

export default function TerminalPlayground() {
    const [history, setHistory] = useState<HistoryItem[]>([
        { command: "", output: 'Welcome to Frezer\'s Interactive Shell v1.0.0. Type "help" for available commands.' }
    ]);
    const [input, setInput] = useState("");
    const terminalEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    useEffect(() => {
        focusInput();
    }, []);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = input.trim().toLowerCase();
        let output: string | React.ReactNode = "";

        if (trimmedInput) {
            switch (trimmedInput) {
                case "help":
                    output = (
                        <div className={styles.helpList}>
                            <p><strong>help</strong> - Show this list of available commands</p>
                            <p><strong>about</strong> - Print developer biography details</p>
                            <p><strong>skills</strong> - Print complete skills stack matrix</p>
                            <p><strong>projects</strong> - Summary of featured projects & repo links</p>
                            <p><strong>experience</strong> - Outline recent professional experience</p>
                            <p><strong>contact</strong> - Show communication handles & links</p>
                            <p><strong>clear</strong> - Clear console output history</p>
                        </div>
                    );
                    break;
                case "about":
                    output = developer.bio;
                    break;
                case "skills":
                    output = (
                        <div className={styles.skillsMatrix}>
                            <p><strong>Frontend:</strong> {developer.skills.frontend.join(", ")}</p>
                            <p><strong>Backend:</strong> {developer.skills.backend.join(", ")}</p>
                            <p><strong>Databases:</strong> {developer.skills.databases.join(", ")}</p>
                            <p><strong>DevOps:</strong> {developer.skills.devops.join(", ")}</p>
                        </div>
                    );
                    break;
                case "projects":
                    output = (
                        <div className={styles.projectsList}>
                            {developer.projects.map((proj, idx) => (
                                <div key={idx} className={styles.projectItem}>
                                    <p className={styles.projTitle}>• {proj.title}</p>
                                    <p className={styles.projDesc}>{proj.description}</p>
                                    <p className={styles.projTech}>Tech: {proj.tech.join(", ")}</p>
                                </div>
                            ))}
                        </div>
                    );
                    break;
                case "experience":
                    output = (
                        <div className={styles.expList}>
                            {developer.experience.map((exp, idx) => (
                                <div key={idx} className={styles.expItem}>
                                    <p><strong>{exp.role}</strong> at <em>{exp.company}</em> ({exp.period})</p>
                                    <p className={styles.expDesc}>{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    );
                    break;
                case "contact":
                    output = (
                        <div className={styles.contactList}>
                            <p>Email: <a href={`mailto:${developer.contact.email}`}>{developer.contact.email}</a></p>
                            <p>GitHub: <a href={developer.contact.github} target="_blank" rel="noreferrer">{developer.contact.github}</a></p>
                            <p>LinkedIn: <a href={developer.contact.linkedin} target="_blank" rel="noreferrer">{developer.contact.linkedin}</a></p>
                            <p>Telegram: <a href={developer.contact.telegram} target="_blank" rel="noreferrer">{developer.contact.telegram}</a></p>
                        </div>
                    );
                    break;
                case "clear":
                    setHistory([]);
                    setInput("");
                    return;
                case "sudo":
                case "sudo rm -rf /":
                    output = (
                        <span className={styles.errorText}>
                            Permission denied. Access level: Visitor. Guest account does not belong to the sudoers file. This incident has been logged.
                        </span>
                    );
                    break;
                case "hack":
                case "matrix":
                    output = (
                        <span className={styles.matrixText}>
                            Loading matrix core... [==============================] 100%
                            Success. System breached. Just kidding! Check out my projects above instead!
                        </span>
                    );
                    break;
                default:
                    output = `Command not found: "${trimmedInput}". Type "help" for a list of valid commands.`;
            }

            setHistory((prev) => [...prev, { command: input, output }]);
        } else {
            setHistory((prev) => [...prev, { command: "", output: "" }]);
        }

        setInput("");
    };

    return (
        <section className={styles.terminalSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>
                        <Sparkles className={styles.sparkIcon} size={28} />
                        Developer Playground
                    </h2>
                    <p className={styles.subtitle}>
                        Interact with a simulated developer CLI. Type commands to query details directly.
                    </p>
                </div>

                <div className={styles.window} onClick={focusInput}>
                    {/* Window Title Bar */}
                    <div className={styles.titleBar}>
                        <div className={styles.dots}>
                            <span className={styles.red}></span>
                            <span className={styles.yellow}></span>
                            <span className={styles.green}></span>
                        </div>
                        <div className={styles.title}>
                            <TerminalIcon size={14} />
                            guest@fretak-terminal:~
                        </div>
                        <div className={styles.spacer}></div>
                    </div>

                    {/* Content / Logs */}
                    <div className={styles.console}>
                        {history.map((item, idx) => (
                            <div key={idx} className={styles.historyRow}>
                                {item.command && (
                                    <div className={styles.commandLine}>
                                        <span className={styles.prompt}>guest@fretak.dev:~$</span>
                                        <span className={styles.commandText}>{item.command}</span>
                                    </div>
                                )}
                                {item.output && (
                                    <div className={styles.outputLine}>
                                        {item.output}
                                    </div>
                                )}
                            </div>
                        ))}
                        
                        {/* Active Input Line */}
                        <form onSubmit={handleCommand} className={styles.inputForm}>
                            <span className={styles.prompt}>guest@fretak.dev:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                className={styles.terminalInput}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                autoComplete="off"
                                autoCapitalize="none"
                                spellCheck="false"
                                aria-label="Terminal input"
                                placeholder='Type "help"...'
                            />
                        </form>
                        <div ref={terminalEndRef} />
                    </div>
                </div>
            </div>
        </section>
    );
}
