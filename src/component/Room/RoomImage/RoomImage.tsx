import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.scss';

const RoomImage = (props: any) => {
  const { imageUrl } = props;
  return (
    <div className={styles.roomTopBlock}>
      <div className={styles.backToHome}>
        <Link to="/rooms" className={styles.removeLinkStyle}>
          WhiteSpace
        </Link>
      </div>
      <div className={styles.roomImage}>
        <div
          className={styles.bigImage}
          style={{ backgroundImage: `url(${imageUrl ? imageUrl[0] : ''})`, }}
        />
        <div
          className={styles.smallImage}
          style={{ backgroundImage: `url(${imageUrl ? imageUrl[1] : ''})`, }}
        />
        <div
          className={styles.smallImage}
          style={{ backgroundImage: `url(${imageUrl ? imageUrl[2] : ''})`, }}
        />
      </div>
    </div>
  );
};

export default RoomImage;
