'use client';
import React from "react";
import { useRouter } from "next/navigation";
import styles from './Home.module.css';

export default function Home() {
    const router = useRouter();
    return (
        <>
            <div className={styles.container}>
                <div className={styles.topdiv}>
                    <ul className={styles.navbar}>
                        <li>
                            <button onClick={() => router.push('/about')} className={styles.navButton}>
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => router.push('/navbar')} className={styles.navButton}>
                                NavBar
                            </button>
                        </li>
                        <li>
                            <button onClick={() => router.push('/contact-us')} className={styles.navButton}>
                                Contact Us
                            </button>
                        </li>
                    </ul>
                </div>
                <h1 className={styles.heading}>
                    This is Home Page
                </h1>
                <p className={styles.description}>
                    On this page, three buttons are displayed. User can easily navigate to other routes upon clicking the button.<br />
                    By clicking the link <b>Go back Home</b> which is present in all routes, user can easily return to the main page.
                </p>

                <div className={styles.imageContainer}>
                    <img 
                        src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75" 
                        alt="Image Of Next Js" 
                        width={400}
                    />
                </div>
            </div>
        </>
    );
}
