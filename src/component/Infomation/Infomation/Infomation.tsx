import React from 'react';
import styles from './index.scss';

const Information = () => (
  <div className={styles.hotelInfo}>
    <div className={styles.infoRows}>
      <i className={`fas fa-phone ${styles.icon}`} />
      <span className={styles.infoText}>02-17264937</span>
    </div>
    <div className={styles.infoRows}>
      <i className={`fas fa-envelope ${styles.icon}`} />
      <span className={styles.infoText}>whitespace@whitespace.com.tw</span>
    </div>
    <div className={styles.infoRows}>
      <i className={`fas fa-home ${styles.icon}`} />
      <span className={styles.infoText}>台北市羅斯福路十段30號</span>
    </div>
  </div>
);

export default Information;
