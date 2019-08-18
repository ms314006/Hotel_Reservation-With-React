import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../Logo';
import CommunityLink from '../../Infomation/CommunityLink';
import Infomation from '../../Infomation/Infomation';
import styles from './index.scss';

const Banner = () => (
  <div
    className={styles.bannerBlock}
    style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
    }}
  >
    <Logo />
    <div className={styles.hotelInfoBlock}>
      <CommunityLink />
      <div className={styles.infoBorder}>
        <Infomation />
      </div>
    </div>
  </div>
);

export default Banner;
