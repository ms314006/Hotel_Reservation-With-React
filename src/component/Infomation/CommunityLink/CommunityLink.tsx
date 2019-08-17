import React from 'react';
import styles from './index.scss';

const CommunityLink = () => (
  <div className={styles.communityLink}>
    <i className={`fab fa-facebook-square ${styles.icon}`} />
    <i className={`fab fa-instagram ${styles.icon}`} />
  </div>
);

export default CommunityLink;
