import Image from 'next/image';
import styles from './tagline.module.css';
import type { NextPage } from "next";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: object) => void;
    };
  }
}

const getStartedHandler = () => {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/brittany-salas/pilot-program?text_color=10031d&primary_color=10031d'
    });
  }
};

type TaglineProps = {
  className?: string;
};


const Tagline: NextPage<TaglineProps> = ({ className = "" }) => {
  return (
    <section className={[styles.aboutSection, className].join(" ")}>
      <Image
            className={styles.floatingBlob}
            width={1440}
            height={1000}
            sizes="100vw"
            alt=""
            src="/nyxccc-img/floatingblob.gif"
          />
      {/* Placeholder image below nav bar */}
      <div className={styles.planetGlbPlaceholderWrapper}>
        <Image
          className={styles.planetGlbPlaceholder}
          loading="lazy"
          width={600}
          height={600}
          sizes="100vw"
          alt="Planet"
          src="/nyxccc-img/planet-glb-placeholder@2x.png"
        />
      </div>
   
      {/* Company name and tagline below placeholder image */}
      <section className={styles.nameTaglineWrapper}>
        <div className={styles.nameTagline}>
          <div className={styles.nameAndTag}>
            <h1 className={styles.companyName}>nyxc</h1>
            <div className={styles.tagLine}>
              A community loan fund for small businesses that clean up
              pollution and restore natural land.
            </div>
          </div>
          <Image
            src="/nyxccc-img/get-started.png"
            onClick={getStartedHandler}
            alt="Beta access button"
            className={styles.getStartedButton}
            width={140}
            height={40}
          />
 
        </div>
       
      </section>
    </section>
  );
};

export default Tagline;
