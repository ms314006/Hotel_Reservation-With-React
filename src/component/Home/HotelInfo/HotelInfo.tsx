import React from 'react';
import styles from './index.scss';

const HotelInfo = (props) => {
  const {} = props;
  return (
    <div className={styles.hotelInfoBlock}>
      <div className={styles.communityLink}>
        <i className={`fab fa-facebook-square ${styles.icon}`} />
        <i className={`fab fa-instagram ${styles.icon}`} />
      </div>
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
    </div>
  );
};

export default HotelInfo;
