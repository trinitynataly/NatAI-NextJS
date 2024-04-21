    import Layout from "@/layout/layout";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import styles from "../sass/index.module.sass";
    import Image from "next/image";


    export default function Home() {
        return (
            <div className={styles.aboutPage}>
                <Layout>
                <div className={styles.banner}>
                    <div className={styles.bannerText}>
                    Greetings, digital wanderer! Welcome to my little corner of the internet, where I fuse my passions for programming, coding, design and photography into a delightful concoction of creativity. As a code-wielding wizard, I transform mundane pixels into mesmerizing digital landscapes that captivate the eye and dazzle the mind. When I&apos;m not immersed in the enigmatic world of ones and zeros, you can find me hunting for that perfect shot, capturing fleeting moments in time through the lens of my trusty camera. So, sit back, relax, and let&apos;s embark on a whimsical journey where professionalism, humor, and innovation harmoniously blend together to weave the tapestry of my digital life. Enjoy the ride!
                    </div>
                </div>  
                <div className={styles.contentBlock}>
                    <h1 className={styles.headline}>ABOUT ME</h1>
                    <div className={styles.photoContainer}>
                        <Image
                            src="/assets/photo.jpg"
                            alt="Your Description"
                            width={500}
                            height={300}
                            layout="responsive"
                            className="rounded-circle border border-4 border-gray"

                        />
                    </div>
                    <div>
                    <p className={styles.textContent}>
                    Welcome to my online sanctuary, where artistic flair and technical expertise unite to deliver exceptional outcomes. As an accomplished programmer, designer, and web developer, I&apos;ve dedicated countless hours to perfecting my skills, driven by an unrelenting passion for my craft. My strong work ethic is a reflection of my dedication and love for my profession. I excel at building meaningful connections with clients and exceeding their expectations, all while maintaining a focus on functionality and user-centric design.
                    </p>
                    <p className={styles.textContent}>
                    Outside the world of coding and design, I find harmony and equilibrium through my love for yoga and my devotion to volunteering at a local dog and cat shelter. This well-rounded approach to life allows me to bring both compassion and an inventive mindset to every project I tackle. My leadership abilities, problem-solving prowess, and timeliness further solidify my reputation as a dependable and results-oriented professional.
                    </p>
                    <p className={styles.textContent}>
                    When I&apos;m not weaving digital masterpieces or championing the cause of our four-legged friends, I can be found immersing myself in logic games and detective stories, channeling my inner detective and delighting in the joy of solving enigmas. So, as you peruse my portfolio, get ready for a journey that not only showcases my professional expertise but also offers a glimpse into the essence of who I am.    
                    </p>
                    <p className={styles.textContent}>
                    In my work, I strive to strike the perfect balance between aesthetic appeal and practicality, ensuring that each project is both visually stunning and highly functional. With a keen eye for detail and a deep understanding of user experience, I craft digital solutions tailored to each client&apos;s unique needs and preferences. My versatility and adaptability have enabled me to thrive in various projects, leaving a trail of satisfied clients in my wake.    
                    </p>
                    <p className={styles.textContent}>
                    As you delve deeper into my portfolio, you&apos;ll uncover a treasure trove of creative endeavors that span programming, design, and web development. Each piece serves as a testament to my unyielding commitment to excellence, innovation, and client satisfaction. So, take your time and enjoy the journey as you explore the many facets of my professional life, woven together with threads of humor, curiosity, and passion.    
                    </p>
                    <p className={styles.textContent}>
                    Together, these five paragraphs offer a comprehensive and engaging glimpse into my life as a programmer, designer, and web developer, as well as my personal interests and values. My dedication to delivering outstanding results, combined with my diverse skills and experiences, make me an ideal candidate for clients seeking exceptional digital solutions.    
                    </p>
                    </div>
                </div>
            </Layout>
            </div>    
        );
    }