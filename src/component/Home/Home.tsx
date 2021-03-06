import React, { useState } from 'react';
import Logo from '../Logo';
import RoomList from './RoomList';
import HotelInfo from './HotelInfo';
import Spin from '../Spin';
import { IState } from '../../interface/IState';
import styles from './index.scss';

const Home = () => {
  const [currentRoom, setCurrentRoom] = useState({ imageUrl: '', name: '', });
  return (
    <>
      <Spin display={currentRoom.name === ''} />
      <div
        className={styles.home}
        style={{
          backgroundImage: `url(${currentRoom.imageUrl})`,
        }}
      >
        <div className={styles.left}>
          <div>
            <Logo />
            <div className={styles.promptText}>
              點擊 Logo 進入網站
            </div>
          </div>
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
    </>
  );
};

export default Home;
