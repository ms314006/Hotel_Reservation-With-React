import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.scss';

const Logo = () => (
  <div className={styles.logoBlock}>
    <div className={styles.logo}>
      <Link to="rooms" className={styles.removeLinkStyle}>
        <div className={styles.logoTextRow}>White</div>
      </Link>
      <Link to="rooms" className={styles.removeLinkStyle}>
        <div className={styles.logoTextRow}>Space</div>
      </Link>
    </div>
  </div>
);

export default Logo;
