import type { NextPage } from "next";
import Image from "next/image";
import styles from "./partnerlogos.module.css";

export type PartnerLogosType = {
  className?: string;
};

const PartnerLogos: NextPage<PartnerLogosType> = ({ className = "" }) => {
  return (
    <div className={[styles.partnerLogos, className].join(" ")}>
       <div id="partner-logos" className={styles.partnerLogos}></div>
        <div className={styles.partnerLogos1}>
        <div className={styles.supporterNetork}>
          <div className={styles.nyxcSupporterNetwork}>
            nyxc Supporter Network
          </div>
          <div className={styles.logosInTray}>
            <div className={styles.logoTray}>
              <div className={styles.logoTrayChild} />
              <div className={styles.logoTrayItem} />
            </div>
            <Image
              className={styles.watsonLogoIcon}
              width={186}
              height={47}
              sizes="100vw"
              alt=""
              src="/nyxccc-img/Watson-logo-footer.svg"
            />
            <Image
              className={styles.bankOfMontrealLogo1Icon}
              width={188}
              height={68}
              sizes="100vw"
              alt=""
              src="/nyxccc-img/bank-of-montreal-logo 1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;