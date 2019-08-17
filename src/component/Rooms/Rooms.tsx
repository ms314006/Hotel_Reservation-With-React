import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_ROOMS } from '../../action/hotel';
import Banner from './Banner';
import Room from './Room';
import { IState } from '../../interface/IState';
import styles from './index.scss';


const Rooms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_ROOMS, });
  }, []);
  const rooms = useSelector((state: IState) => state.rooms);
  return (
    <div className={styles.roomsBlock}>
      <Banner />
      <div className={styles.roomsListOutsideBlock}>
        <div className={styles.roomListInsideBlock}>
          {rooms.map(room => <Room key={room.id} room={room} />)}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
