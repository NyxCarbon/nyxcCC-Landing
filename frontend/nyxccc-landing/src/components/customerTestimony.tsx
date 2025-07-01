import type { NextPage } from "next";
import styles from './customerTestimony.module.css';

type CustomerTestimonyProps = {
 className?: string;
};

const customerTestimony: NextPage<CustomerTestimonyProps>  = ({ }) => {
  return (     
     
      <div className={styles.customerTestimony}>
        <div className={styles.photoPlaceHolder} />
        <div className={styles.customerName}>
          <span className={styles.customerNameTxtContainer}>
            <p className={styles.firstNameLast}>{`First Name Last Name, `}</p>
            <p className={styles.firstNameLast}>Company Name, Title</p>
          </span>
        </div>
        <div
          className={styles.customerQuote}
        >{`Getting the capital to expand our business would triple our impact.  `}</div>
      </div>
  )
}

export default customerTestimony;