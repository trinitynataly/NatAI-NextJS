import Layout from "@/layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../sass/index.module.sass";


export default function Home() {
    return (
        <div className={styles.indexApp}>
            <Layout>
                <div>Home</div>
            </Layout>
        </div>    
    );
}