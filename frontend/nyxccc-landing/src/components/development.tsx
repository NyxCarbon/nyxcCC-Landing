import type { NextPage } from "next";
import Image from "next/image";
import styles from "./development.module.css";

export type DevelopmentType = {
  className?: string;
};


const Development: NextPage<DevelopmentType> = ({ className = "" }) => {
  return (
    <div className={[styles.developmentSection, className].join(" ")}>
      <main className={styles.developmentSection}></main>
        {/* Community Development Title */}
        <div className={styles.communityDevelopmentWrapper}>
          <div className={styles.communityDevelopment}>
            Community Development
          </div>
        </div>
        {/* Two side-by-side boxes */}
        <div className={styles.trayRow}>
          <div className={styles.trayLeft}>       {/* Community Box Left PNG as background */}
            <Image
              className={styles.communityBoxLeft}
              width={420}
              height={320}
              sizes="100vw"
              alt=""
              src="/nyxccc-img/Community Box Left.png"
            />
            {/* Text content positioned over the background */}
            <div className={styles.trayBoxLeft}>
              Through targeted educational programs and technical assistance,
              nyxc enables businesses to enter environmental markets,
              develop climate-smart business practices,
              and create opportunities for ecosystem restoration and carbon removal.
            </div>
          </div>
          <div className={styles.trayLeft}>
            {/* Community Box Right PNG as background */}
            <Image
              className={styles.communityBoxRight}
              width={420}
              height={320}
              sizes="100vw"
              alt=""
              src="/nyxccc-img/Community Box Right.png"
            />
            {/* Text content positioned over the background */}
            <div className={styles.trayBoxRight}>
              nyxc’s approach goes beyond traditional financial services, 
              focusing on building community-level economic development, 
              creating sustainable job opportunities, and helping entrepreneurs 
              become agents of environmental and economic change.
            </div>
          </div>
        </div>
    </div>

  );
};

export default Development;