import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.profileCard}>
            <img className={styles.avatar} src="src/assets/Sam.JPG" alt="Profile Pic" />
        <h1 className={styles.name}>Sameera Kuna</h1>
        <h3 className={styles.role}>React Developer</h3>
        <p className={styles.bio}>An aspiring React developer in full stack development</p>
        <div className="links">
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
        </div>
    </div>
  );
}

export default About;