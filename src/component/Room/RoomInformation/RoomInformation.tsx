import React from 'react';
import SeparationLine from '../SeparationLine';
import bed from '../../../enum/bed';
import provide from '../../../enum/provide';
import provideIcon from '../../../enum/provideIcon';
import styles from './index.scss';

const RoomInformation = (props: any) => {
  const { room, } = props;
  return (
    <div className={styles.information}>
      <div>
        <div className={styles.name}>
          {room.name}
        </div>
        <div className={styles.detail}>
          <div>
            房客人數限制：
            {`${room.descriptionShort.GuestMin} ～ ${room.descriptionShort.GuestMax} 人`}
          </div>
          <div>
            床型：
            {bed[room.name]}
          </div>
          <div>
            衛浴數量：
            {`${room.descriptionShort['Private-Bath']} 間`}
          </div>
          <div>
            房間大小：
            {`${room.descriptionShort.Footage} 平方公尺`}
          </div>
        </div>
        <div className={styles.description}>
          {room.description}
        </div>
        <div className={styles.separationLine}>
          <SeparationLine />
        </div>
        <div className={styles.checkInfoBlock}>
          <div className={styles.checkInfo}>
            <div>Check In</div>
            <div className={styles.checkTime}>
              {`${room.checkInAndOut.checkInEarly} - ${room.checkInAndOut.checkInLate}`}
            </div>
          </div>
          <div className={styles.checkInfo}>
            <div>Check Out</div>
            <div className={styles.checkTime}>
              {room.checkInAndOut.checkOut}
            </div>
          </div>
        </div>
        <div className={styles.provideInfo}>
          {Object.keys(room.amenities).map((amenitie: any) => (
            <div
              key={amenitie}
              className={`${styles.provide} ${room.amenities[amenitie] ? '' : styles.notEnable}`}
            >
              <i className={`${provideIcon[amenitie]} ${styles.icon}`} />
              {provide[amenitie]}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.priceBlock}>
        <div className={styles.normalDayPrice}>
          {`NT.${room.normalDayPrice}`}
        </div>
        <div className={styles.dayDescription}>
          平日（一～四）
        </div>
        <div className={styles.holidayPrice}>
          {`NT.${room.holidayPrice}`}
        </div>
        <div className={styles.dayDescription}>
          假日（五～日）
        </div>
      </div>
    </div>
  );
};

export default RoomInformation;
