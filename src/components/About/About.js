import styles from "./About.module.css";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faEnvira,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div data-aos="fade-left" className={styles.left}>
        <div className={styles.cube}>
          <div className={styles.box + " " + styles.box1}>
            <FontAwesomeIcon icon={faEnvira} />
          </div>

          <div className={styles.box + " " + styles.box2}>
            <FontAwesomeIcon icon={faHtml5} />
          </div>

          <div className={styles.box + " " + styles.box3}>
            <FontAwesomeIcon icon={faCss3} />
          </div>

          <div className={styles.box + " " + styles.box4}>
            <FontAwesomeIcon icon={faReact} />
          </div>

          <div className={styles.box + " " + styles.box5}>
            <FontAwesomeIcon icon={faJsSquare} />
          </div>

          <div className={styles.box + " " + styles.box6}>
            <FontAwesomeIcon icon={faGitAlt} />
          </div>
        </div>
      </div>
      
      <div data-aos="fade-right" className={styles.right}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.sub}>
          "Design is not just what it looks like and feels like. Design is how
          it works" - Steve Jobs
        </p>
        <p className={styles.description}>
          Desde siempre me ha apasionado la física, las matemáticas y la tecnología. Me encanta entender cómo funcionan las cosas y encontrar soluciones creativas a los problemas. Además, el fútbol es una de mis grandes pasiones, no solo porque disfruto jugarlo, sino porque me enseña mucho sobre trabajo en equipo y estrategia. Me interesa todo lo relacionado con la tecnología, desde aprender a programar hasta entender cómo se diseñan las cosas que usamos todos los días. Estoy emocionado por seguir aprendiendo y trabajar en proyectos que combinen mis intereses y me permitan crecer junto a personas positivas.
        </p>
      </div>
    </div>
  );
};

export default About;
