import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../sass/footer.module.sass";
import Image from "next/image";

export default function Footer() {
    const router = useRouter();

    // Function to check if the link is the current route
    const isActive = (pathname) => router.asPath === pathname;
    const getCurrentYear = () => new Date().getFullYear();


    return (
        <footer className={styles.footer}>
            <div className={`container text-center ${styles.logodiv}`}>
                <Link href="/">
                    <span className={styles.logo}>
                        <Image
                            src="/assets/NatAI.svg"
                            alt="NatAI Logo"
                            width={200}
                            height={60}
                            priority
                        />
                    </span>
                </Link>
            </div>    
            <nav className={`nav justify-content-center ${styles.nav}`}>
                <Link href="/" className="nav-link active text-white text-decoration-none">
                    <span className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>HOME</span>
                </Link>
                <Link href="/about" className="nav-link text-white text-decoration-none">
                    <span className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>ABOUT</span>
                </Link>
                <Link href="/projects" className="nav-link text-white text-decoration-none">
                    <span className={`${styles.navLink} ${isActive('/projects') ? styles.active : ''}`}>PROJECTS</span>
                </Link>
            </nav>
            <div className={styles.footerText}>
                {/* Copyright text with current year calculated from the function */}
                &copy; {getCurrentYear()} Natalia Pakhomova Portfolio All Rights Reserved
            </div>
        </footer>
    );
}
