import React from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import styles from './index.scss';

const Booking = (props: any) => {
  const { booking, } = props;
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
        >
          預約時段
        </button>
      </div>
    </div>
  );
};

export default Booking;
