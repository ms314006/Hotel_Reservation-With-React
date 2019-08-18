import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './index.scss';

const useStyles = makeStyles({
  root: {
    color: '#bebebe',
  },
});

const Spin = (props: any) => {
  const { display, } = props;
  const classes = useStyles({});
  return (
    <div
      className={styles.spinBlock}
      style={{ display: display ? 'block' : 'none', }}
    >
      <div className={styles.spin}>
        <CircularProgress
          size="80"
          classes={{ root: classes.root, }}
        />
      </div>
    </div>
  );
};

export default Spin;
