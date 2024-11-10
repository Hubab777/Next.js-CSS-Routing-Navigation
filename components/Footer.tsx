import React from "react";
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <ul className={styles.footerList}>
                <h1 className={styles.footerHeading}>
                    <b>This is Footer Page</b>
                </h1>
                <p className={styles.footerText}>
                    My Next.js website. All rights reserved.
                </p>
            </ul>
        </div>
    );
}
