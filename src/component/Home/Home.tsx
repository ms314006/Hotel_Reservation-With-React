import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../Logo';
import RoomList from './RoomList';
import HotelInfo from './HotelInfo';
import { IState } from '../../interface/IState';
import styles from './index.scss';

const Home = () => {
  const rooms = useSelector((state: IState) => state.rooms);
  const [currentRoom, setCurrentRoom] = useState({ imageUrl: '', name: '', });
  return (
    <div
      className={styles.home}
      style={{
        backgroundImage: `url(${currentRoom.imageUrl})`,
      }}
    >
      <div className={styles.left}>
        <Logo />
        <div className={styles.roomInfo}>
          <div className={styles.roomNo}>01</div>
          <div className={styles.roomName}>{currentRoom.name}</div>
        </div>
      </div>
      <div className={styles.right}>
        <RoomList currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
        <HotelInfo />
      </div>
    </div>
  );
};

export default Home;
