// Core
import React from "react";

// Custom
import ProfileImg from "../images/me.png";
import styles from "./Info.module.css";
import emailLogo from "../images/Email-logo.png";
import linkedLogo from "../images/LinkedIn-logo.png";

export default function Info() {
    return(
        <div className={styles.container}>
            <header className="styles.header">
                <img
                    className={styles.avatar}
                    src={ProfileImg}
                    alt="Dean O'Rourke"
                />
            </header>

            <div className={styles.bio}>
                <h1 className={styles.name}>Dean O'Rourke</h1>
                <p className={styles.title}>Front End Developer</p>

                <div className={styles.contacts}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.links} ${styles.email}`}
                        href="mailto:dean.orourke@hotmail.com"
                    >
                        <img className={styles.icons} src={emailLogo} alt="email_logo"/> Email
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.links} ${styles.linkedin}`}
                        href="https://www.linkedin.com/in/dean-o-rourke-41753217a/"
                    >
                        <img className={styles.icons} src={linkedLogo} alt="linkedin logo" /> LinkedIn
                    </a>
                </div>
            </div>

        </div>
    );
}