import Layout from "@/layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../sass/index.module.sass";


export default function Home() {
    return (
        <div className={styles.indexApp}>
            <Layout>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    Welcome to my portfolio, where creativity meets functionality. 
                    As a skilled web developer and programmer, 
                    I bring your visions to life with innovative designs and seamless code that engage and inspire.
                </div>
            </div>  
        </Layout>
        </div>    
    );
}