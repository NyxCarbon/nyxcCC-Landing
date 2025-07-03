import type { NextPage } from "next";
import Image from "next/image";
import styles from "./footer.module.css";

type FooterProps = {
    className?: string;
};

const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Footer: NextPage<FooterProps> = ({ className = "" }) => {

const onLogoClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <div className={[styles.footer1, className].join(" ")}>
      <section className={styles.footer2}>
        <div className={styles.footerColumn}>
          <div className={styles.footerNav}>
             <Image
            className={styles.nyxcLogoWhite11}
            loading="lazy"
            width={173.2}
            height={41}
            sizes="100vw"
            alt=""
            src="/nyxccc-img/nyxc logo white.svg"
            onClick={onLogoClick}
            style={{cursor:"pointer"}}            
            />
     
            <div className={styles.discordBlock}>
              <Image
                className={styles.discord59688981Icon}
                loading="lazy"
                width={33}
                height={33}
                sizes="100vw"
                alt=""
                src="/nyxccc-img/discord_5968898 1.svg"
                onClick={() => openExternalLink("https://discord.gg/W9KAXfws")}
              />
              <div className={styles.divider} />
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contactWrapper}>
                <div className={styles.newsletter}>
                  <a
                  href="https://share.hsforms.com/1YXfQ9Z8YRY2fuFz4Kwu3Vgcdvye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contact}
                    >
                    Newsletter
                  </a>
                </div>
              </div>
              <div className={styles.divider} />
            </div>
            <div className={styles.supportBlock}>
              <div className={styles.supportnyxcnetWrapper}>
                <div className={styles.supportnyxcnet}>support@nyxc.net</div>
              </div>
              <div className={styles.divider} />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.div}>©2025 nyxc Community Loan Fund</div>
    </div>
  );
};

export default Footer;
