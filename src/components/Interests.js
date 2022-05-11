// Core
import React from "react";

// Custom
import styles from "./Interests.module.css";

export default function Interests() {
    return(
        <main className={styles.interests}>
            <h2 className={styles.header}>Interests</h2>
            <p className={styles.texts}>
                Web development, full-stack, databases, accessibility,
                football, formula 1. Massive coffee advocate.
            </p>
        </main>
    );
}