import styles from "./team.module.css";
import Image from "next/image";    
import type { NextPage } from "next";

type TeamProps = {
  className?: string;
};

const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Team: NextPage<TeamProps> = ({ className = "" }) => {
  return (
    <section className={`${styles.teamSection} ${className}`}>
      <h2 className={styles.teamTitle}>Team</h2>
      <div className={styles.teamPhotos}>
        <div className={styles.teamCardLeft}>
          <Image
          className={styles.memberPhoto}
          width={216}
          height={215}
          alt="Team Card Background"
          src="/nyxccc-img/TeamCardRight.png"
          />
          <div className={styles.memberName}>
            <span className={styles.memberName}>Brittany Salas, Founder </span>
            <Image
              className={styles.linkedinIcon}
              width={22}
              height={22}
              alt="LinkedIn"
              src="/nyxccc-img/LinkedIn.svg"
              onClick={() => openExternalLink("https://www.linkedin.com/in/brittanysalas/")}
            />
          </div>
          <Image
            className={styles.memberPhoto}
            width={216}
            height={215}
            alt="Brittany Salas"
            src="/nyxccc-img/Salas Photo Rounded.png"
          />
        </div>
        <div className={styles.teamCardRight}>
          <Image
          className={styles.memberPhoto}
          width={216}
          height={215}
          alt="Team Card Background"
          src="/nyxccc-img/TeamCardLeft.png"
          />
          <div className={styles.memberName}>
            <span className={styles.memberName}>George Kelly, Advisor </span>
            <Image
              className={styles.linkedinIcon}
              width={22}
              height={22}
              alt="LinkedIn"
              src="/nyxccc-img/LinkedIn.svg"
              onClick={() => openExternalLink("https://www.linkedin.com/in/george-kelly-96a506131/")}
            />
          </div>
          <Image
            className={styles.memberPhoto}
            width={218}
            height={215}
            alt="George Kelly"
            src="/nyxccc-img/Kelly Photo Rounded.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;