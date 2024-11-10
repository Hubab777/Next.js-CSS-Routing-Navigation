import React from "react";
import Link from "next/link";
import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.heading}><b>This is Contact Page</b></h1>
            <p className={styles.contactDetails}>
                Phone: [Enter your phone number] <br />
                Email: [Enter your email address here]
            </p>
            <Link href="/" className={styles.homeLink}>
                Go back to Home Page
            </Link>
        </div>
    );
};

export default ContactUs;
