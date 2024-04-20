import Link from "next/link";
import styles from "../sass/header.module.sass";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container text-center">
                <Link href="/" className="logo">
                    <Image
                        src="/assets/NatAI.svg"
                        alt="NatAI Logo"
                        width={160}
                        height={60}
                        priority
                    />
                </Link>
            </div>    
            <nav className="nav justify-content-center">
                <Link href="/" className="nav-link active text-white" aria-current="page">Home</Link>
                <Link href="/about" className="nav-link text-white">About</Link>
                <Link href="/projects" className="nav-link text-white">Projects</Link>
            </nav>
        </header>
    );
    }
