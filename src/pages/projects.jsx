import Layout from "@/layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../sass/index.module.sass";


export default function Home() {
    return (
        <div className={styles.projectPage}>
            <Layout>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                Discover the captivating array of projects that grace my portfolio, each meticulously crafted to showcase my technical prowess and creative ingenuity. These masterpieces stand as a testament to my dedication to delivering high-quality, tailor-made solutions that leave clients in awe. Immerse yourself in the compelling fusion of functionality and visual appeal, as you explore the diverse range of projects that exemplify my commitment to exceeding expectations and pushing the boundaries of what&apos;s possible in the digital realm.
                </div>
            </div>  
        </Layout>
        </div>    
    );
}