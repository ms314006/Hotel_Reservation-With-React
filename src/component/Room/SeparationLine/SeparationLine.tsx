import React from 'react';
import styles from './index.scss';

const SeparationLine = () => (
  <div className={styles.separationLine}>
    <div className={styles.border} />
    <div className={styles.border} />
    <div className={styles.border} />
  </div>
);

export default SeparationLine;
