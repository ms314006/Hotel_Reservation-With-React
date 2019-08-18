import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_ROOMS } from '../../../action/hotel';
import { IState } from '../../../interface/IState';
import styles from './index.scss';

const List = (props: any) => {
  const { room, currentRoom, setCurrentRoom, } = props;
  useEffect(() => {
    setCurrentRoom(room);
  }, []);
  return (
    <div
      onBlur={() => {}}
      onMouseMove={() => { setCurrentRoom(room); }}
      className={styles.listBlock}
    >
      <div
        className={
          `${styles.hoverBorder} ${room.name === currentRoom.name ? styles.active : ''}`
        }
      />
      <div className={styles.list}>
        {room.name}
      </div>
    </div>
  );
};

const RoomList = (props: any) => {
  const { currentRoom, setCurrentRoom, } = props;
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
            <List
              key={room.id}
              room={room}
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
            />
          ))
        }
      </div>
    </div>
  );
};

export default RoomList;
