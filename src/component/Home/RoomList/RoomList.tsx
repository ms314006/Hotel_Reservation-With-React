import React, { useEffect, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_ROOMS } from '../../../action/hotel';
import styles from './index.scss';

const List = (props: any) => {
  const { room, } = props;
  return (
    <div className={styles.list}>
      {room.name}
    </div>
  );
};

const RoomList = (props: any) => {
  const {} = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_ROOMS, });
  }, []);
  const rooms = useSelector((state: IState) => state.rooms);
  return (
    <div className={styles.roomListBlock}>
      <div className={styles.roomList}>
        {
          rooms.map((room: any) => (
            <List key={room.id} room={room} />
          ))
        }
      </div>
    </div>
  );
};

export default RoomList;
