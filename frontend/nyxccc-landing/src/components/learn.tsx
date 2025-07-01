import styles from "./learn.module.css";
import Image from "next/image";
import type { NextPage } from "next";


const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

type LearnProps = {
  className?: string;
};  

const Learn: NextPage<LearnProps> = ({ className = "" }) => {
  return (
   
    <div className={[styles.learn, className].join(" ")}>
      <div className={styles.learnSection}>
        <div className={styles.connectDescParent}>
          <div
            className={styles.connectDesc}
          >{`Connect with the nature finance ecosystem of funders and project developers at our next event.  `}</div>
          <div className={styles.learnButtonSimple}>
            <Image
              className={styles.learnButtonSimpleChild}
              width={100}
              height={9}
              sizes="100vw"
              alt=""
              src="/nyxccc-img/Learn Button Simple.png"
              onClick={() => openExternalLink("https://discord.gg/W9KAXfws")}
            />
          </div>
        </div>
      </div>
      </div>
    )
  };

export default Learn;