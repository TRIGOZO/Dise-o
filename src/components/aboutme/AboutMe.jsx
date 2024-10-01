import { t } from "i18next";
import styles from "./AboutMe.module.css";

import { motion } from "framer-motion";
import zigzag from "../../assets/icons/zigzag.svg";

const AboutMe = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, transform: "translateY(-100%)" }}
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      exit={{ opacity: 0, transform: "translateY(0%)" }}
      transition={{ duration: 0.8 }}
    >
      <section className={`aboutme ${styles.aboutme}`}>
        <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg" alt="aboutme" />
        <p>{t("aboutmeTwo")}</p>

        <div className={styles.sl}>
          <section className={styles.skills}>
            <article className="title">
              <h4>{t("mySkills")}</h4>
              <img src={zigzag} alt="zigzag" />
            </article>

            <div>
              <span>Diseño de publicidad</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Diseño editorial</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Diseño de ilustraciones</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Animación y multimedia</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Diseño web</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>Comunicación visual</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Logo personal</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Tarjeta presentacion</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Diseño de empaques</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Diseño UI</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Fotografo</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
          </section>

          <section className={styles.languages}>
            <article className="title">
              <h4>{t("Program")}</h4>
              <img src={zigzag} alt="zigzag" />
            </article>

            <div>
              <span>{t("Photoshop")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>{t("Canva")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>{t("Ilustrator")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>{t("Capcut")}</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>{t("Figma")}</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutMe;
