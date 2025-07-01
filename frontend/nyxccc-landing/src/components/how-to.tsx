import type { NextPage } from "next";
import Image from "next/image";
import styles from "./how-to.module.css";

export type HowToType = {
  className?: string;
};

const getStartedHandler = () => {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/brittany-salas/pilot-program?text_color=10031d&primary_color=10031d'
    });
  }
};


const HowTo: NextPage<HowToType> = ({ className = "" }) => {
  return (
    <div className={[styles.tray31, className].join(" ")}>
      <section className={styles.tray31}>
        <Image
          className={styles.rightBoxChild3}
          loading="lazy"
          width={396.8}
          height={460}
          sizes="100vw"
          alt=""
          src="/nyxccc-img/RightBox.png"
        />
      </section>
      <section className={styles.text1}>
        <h1 className={styles.confirmTerms1}>Confirm Terms</h1>
        <div className={styles.optIntoFlexible1}>
          Opt into flexible financing options for environmental markets.
        </div>
      </section>
      <div className={[styles.tray21, className].join(" ")}>
        <section className={styles.CenterBox}>
          <Image
            className={styles.centerBoxChild3}
            loading="lazy"
            width={396.8}
            height={460}
            sizes="100vw"
            alt=""
            src="/nyxccc-img/CenterBox.png"
          />
        </section>
        <section className={styles.signUpGroup}>
          <h1 className={styles.signUp1}>Sign Up</h1>
          <div className={styles.take30Seconds1}>
            Take 30 seconds to create a profile and schedule an introductory call.
          </div>
          <div className={styles.getStartedWrapper}>
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
      <div className={[styles.tray12, className].join(" ")}>
        <section className={styles.leftBox2}>
          <Image
            className={styles.leftbox2}
            loading="lazy"
            width={396.8}
            height={460}
            sizes="100vw"
            alt=""
            src="/nyxccc-img/LeftBox.png"
          />
        </section>
        <section className={styles.titleAndDescription2}>
          <h1 className={styles.companyDetails2}>Company Details</h1>
          <div className={styles.preQualifiedBorrowersSubmit2}>
            Pre-qualified borrowers submit company details for final review.
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}

export default HowTo;









