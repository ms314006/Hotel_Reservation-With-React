import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RoomImage from './RoomImage';
import RoomInformation from './RoomInformation';
import Booking from './Booking';
import { GET_ROOM } from '../../action/hotel';
import { IState } from '../../interface/IState';
import styles from './index.scss';

const Room = (props: any) => {
  const { match: { params: { roomId, }, }, } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_ROOM, roomId, });
  }, []);
  return (
    <div className={styles.roomBlock}>
      <div className={styles.imageBlock}>
        <RoomImage />
      </div>
      <div className={styles.information}>
        <RoomInformation />
        <Booking />
      </div>
    </div>
  );
};

export default Room;
