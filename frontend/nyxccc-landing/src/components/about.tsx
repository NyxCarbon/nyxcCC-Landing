import type { NextPage } from "next";
import Image from "next/image";
import styles from "./about.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.about}>
      <section className={styles.pronouncedNixSeeTheNameCWrapper}>
        <div className={styles.pronouncedNixSeeTheContainer}>
          <span>{`Pronounced `}</span>
          <span>{`nix-see, `}</span>
          <span>the name comes from Nyx</span>
          <span>{`, `}</span>
          <span>{`the primordial Greek goddess of night, daughter of Chaos and mother of Aether, the brightness in the sky. `}</span>
        </div>
      </section>
      <div className={styles.nyxcIsDedicated}>
          <span>{`nyxc is dedicated to transforming economic opportunities in underserved
        communities by addressing critical barriers to financial inclusion and
        climate resilience. `}</span>
      </div>
      <section className={styles.environmentalMarketsPose}>
                  <span>{`Environmental markets pose challenges for small and mid-sized businesses
        that need capital to grow. By providing loans and comprehensive
        educational support, we empower business owners to overcome challenges
        and unlock their services to help communities adapt to extreme weather.`}</span>
      </section>
      <Image
        className={styles.aboutChild}
        width={1440}
        height={687}
        sizes="100vw"
        alt=""
        src="/nyxccc-img/new Ellipse 20.png"
        unoptimized
      />

    </div>
  );
};

export default About;