import React from 'react';
import Logo from '../../Logo';
import CommunityLink from '../../Infomation/CommunityLink';
import Infomation from '../../Infomation/Infomation';
import styles from './index.scss';

const Banner = (props: any) => {
  const {} = props;
  return (
    <div
      className={styles.bannerBlock}
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80)',
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
};

export default Banner;
