// Core
import React from "react";

// Custom
import styles from "./About.module.css";

export default function About() {
    return(
        <main className={styles.about}>
            <h2 className={styles.header}></h2>
            <p className={styles.text}>
                Experience working as a full stack web developer for an
                Irish travel agency in Dublin. Good software is made to
                be accessible by all. Love to create unique user
                interfaces with excellent navigation.
            </p>
        </main>
    );
}