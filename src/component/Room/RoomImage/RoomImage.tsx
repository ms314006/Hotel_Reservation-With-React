import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IState } from '../../../interface/IState';
import styles from './index.scss';

const RoomImage = () => {
  const room = useSelector((state: IState) => state.room);
  const imageUrl = [...room.room[0].imageUrl];
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
