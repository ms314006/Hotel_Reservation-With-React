import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.scss';

const getRoomChineseName = (name: string): string => {
  switch (name) {
    case 'Single Room':
      return '單人房';
    case 'Deluxe Single Room':
      return '豪華單人房';
    case 'Double Room':
      return '雙人房（雙人床）';
    case 'Deluxe Double Room':
      return '豪華雙人房（兩雙人床）';
    case 'Twin Room':
      return '雙人房（兩床）';
    case 'Deluxe Twin Room':
      return '豪華雙人房（兩床）';
    default:
      throw new Error('No have room!');
  }
};

const Room = (props) => {
  const { room, } = props;
  return (
    <div className={styles.room}>
      <Link to={`room/${room.id}`}>
        <div
          className={styles.roomImage}
          style={{
            backgroundImage: `url(${room.imageUrl})`,
          }}
        />
      </Link>
      <div className={styles.roomInfo}>
        {room.name}
        <div className={styles.roomDetailInfo}>
          <div className={styles.roomChineseName}>
            {getRoomChineseName(room.name)}
          </div>
          <div className={styles.roomPrice}>
            <div>
              <span className={styles.normalDayPrice}>
                {`NT.${room.normalDayPrice}  `}
              </span>
              平日
            </div>
            <div>
              {`NT.${room.holidayPrice} 假日`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
