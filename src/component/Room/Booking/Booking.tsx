import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import moment from 'moment';
import HandleBooking from '../HandleBooking';
import { IState } from '../../../interface/IState';
import { RESERVATION_ROOM_SUCCESS } from '../../../action/hotel';
import styles from './index.scss';

const Booking = () => {
  const dispatch = useDispatch();
  const { booking, } = useSelector((state: IState) => state.room);
  const [openBooking, setOpenBooking] = useState(false);
  const bookingClassName = ({ date, }): string => {
    const getDate = moment(date).format('YYYY-MM-DD');
    const bookingDates = booking.map((bookingInfo: any) => bookingInfo.date);
    if (bookingDates.indexOf(getDate) !== -1) {
      return 'isBooking';
    }
    return '';
  };

  return (
    <div>
      <Calendar
        className={styles.calendar}
        tileClassName={bookingClassName}
      />
      <div className={styles.bookingBtnBlock}>
        <button
          type="button"
          className={styles.bookingBtn}
          onClick={() => {
            setOpenBooking(true);
            dispatch({
              type: RESERVATION_ROOM_SUCCESS,
              payload: {
                reservationMessage: '',
              },
            });
          }}
        >
          預約時段
        </button>
      </div>
      <HandleBooking
        open={openBooking}
        closeBooking={() => { setOpenBooking(false); }}
      />
    </div>
  );
};

export default Booking;
