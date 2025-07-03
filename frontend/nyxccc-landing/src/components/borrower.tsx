import type { NextPage } from "next";
import Image from "next/image";
import styles from "./borrower.module.css";

const Example: NextPage = () => {
  return (
    <div className={styles.example}>
      <main className={styles.exampleSection}>
               <Image
                className={styles.aboutChild}
                width={1440}
                height={687}
                sizes="100vw"
                alt=""
                src="/nyxccc-img/new Ellipse 20.png"
              />
          <div className={styles.sectionTitle}>
          Create a Profile to Apply for a Loan
          </div>
        <section className={styles.screenShotAndDescription}>
          <div className={styles.descriptionText}>
            Small business owners in environmental markets face significant
            challenges in accessing financing. nyxc works with companies to
            provide loans, flexible financing, and comprehensive educational
            support. We empower businesses to overcome challenges and unlock
            their services to help communities adapt to extreme weather. 
          </div>
          <Image
            className={styles.example730ef7ab1Icon}
            loading="lazy"
            width={663}
            height={320}
            sizes="100vw"
            alt=""
            src="/nyxccc-img/example.png"
          />
        </section>

      </main>
    </div>
  );
};

export default Example;


