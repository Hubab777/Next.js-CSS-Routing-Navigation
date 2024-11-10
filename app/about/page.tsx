import React from "react";
import Link from "next/link";
import styles from './AboutPage.module.css';

const AboutPage = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.heading}><b>This is About Page</b></h1>
            <p className={styles.description}>
                This web application is built by using Next.js. Next.js is a powerful React framework for building fast and scalable web applications.
            </p>
            <Link href="/" className={styles.homeLink}>
                Go back to Home Page
            </Link>
        </div>
    );
};

export default AboutPage;
