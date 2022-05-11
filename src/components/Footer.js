// Core
import React from "react";

// Custom
import styles from "./Footer.module.css";
import twitterLogo from "../images/Twitter-logo.png";
import githubLogo from "../images/Github-logo.png";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.socialMedia}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.links}
                    href="https://github.com/DeanORourke1996"
                >
                    <img 
                        src={githubLogo}
                        alt="Click to go to my Github"
                        className={styles.socialIcons}
                    />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.links}
                    href="https://twitter.com/Dean0r96"
                >
                    <img
                        src={twitterLogo}
                        alt="Click to go to my Twitter"
                        className={styles.socialIcons}
                    />
                </a>
            </div>
        </footer>
    );
}