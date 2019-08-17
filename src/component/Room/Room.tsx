import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RoomImage from './RoomImage';
import RoomInformation from './RoomInformation';
import Booking from './Booking';
import { GET_ROOM } from '../../action/hotel';
import { IState } from '../../interface';
import styles from './index.scss';

const Room = (props: any) => {
  const { match: { params: { roomId, }, }, } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_ROOM, roomId, });
  }, []);
  const room = useSelector((state: IState) => state.room);
  const imageUrl = [...room.room[0].imageUrl];
  return (
    <div className={styles.roomBlock}>
      <div className={styles.imageBlock}>
        <RoomImage imageUrl={imageUrl} />
      </div>
      <div className={styles.information}>
        <RoomInformation room={room.room[0]} />
        <Booking booking={room.booking} />
      </div>
    </div>
  );
};

export default Room;
