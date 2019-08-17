import React from 'react';
import Logo from '../Logo';
import RoomList from './RoomList';
import HotelInfo from './HotelInfo';
import styles from './index.scss';

const Home = (props: any) => {
  const {} = props;
  return (
    <div
      className={styles.home}
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80)',
      }}
    >
      <div className={styles.left}>
        <Logo />
        <div className={styles.roomInfo}>
          <div className={styles.roomNo}>04</div>
          <div className={styles.roomName}>Deluxe Double Room</div>
        </div>
      </div>
      <div className={styles.right}>
        <RoomList />
        <HotelInfo />
      </div>
    </div>
  );
};

export default Home;
