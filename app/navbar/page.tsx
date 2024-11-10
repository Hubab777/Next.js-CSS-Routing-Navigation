import React from "react";
import Link from "next/link";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <h1 className={styles.heading}><b>This is NavBar Page</b></h1>
            <Link href="/" className={styles.homeLink}>
                Go back to Home Page
            </Link>
        </div>
    );
};

export default Navbar;
