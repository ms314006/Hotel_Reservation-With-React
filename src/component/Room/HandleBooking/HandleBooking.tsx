import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import SeparationLine from '../SeparationLine';
import { IState } from '../../../interface/IState';
import { RESERVATION_ROOM } from '../../../action/hotel';
import styles from './index.scss';

const initState = {
  name: '',
  tel: '',
  dateS: moment(new Date().addDays(1)).format('YYYY-MM-DD'),
  dateE: moment(new Date().addDays(2)).format('YYYY-MM-DD'),
};

const useStyles = makeStyles({
  input: {
    width: 320,
  },
  datePicker: {
    width: 160,
  },
  submitButton: {
    padding: '8px 24px',
    background: '#484848',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#6e6e6e',
    },
  },
  closeButton: {
    padding: '8px 24px',
    background: '#D8D8D8',
    color: '#6D7278',
  },
});

const HandleBooking = (props: any) => {
  const classes = useStyles({});
  const { open, closeBooking, } = props;
  const hotel = useSelector((state: IState) => state.hotel);
  const { room: [room], } = useSelector((state: IState) => state.room);
  const reservationResult = useSelector((state: IState) => state.reservationResult);
  const [bookingInfo, setBookingInfo] = useState({ ...initState, });
  const [validator, setValidator] = useState({
    name: { result: false, message: '', },
    tel: { result: false, message: '', },
  });

  const isInvalidDate = (value: string) => String(value) !== 'Invalid Date' && value !== null;

  const dispatch = useDispatch();
  const submitBooking = () => {
    const checkBookingInfo = () => {
      let result = true;
      const checkColumn = [{ name: '姓名', }, { tel: '電話', }];
      const workValidator = { ...validator, };
      checkColumn.forEach((value, index) => {
        const key = Object.keys(value)[0];
        if (bookingInfo[key].replace(' ', '') === '') {
          workValidator[key] = { result: true, message: `${checkColumn[index][key]}不得為空！`, };
          result = false;
        } else {
          workValidator[key] = { result: false, message: '', };
        }
      });

      if (!/[0-9]/.test(bookingInfo.tel)) {
        workValidator.tel = { result: true, message: '請輸入正確的電話格式！', };
        result = false;
      }

      if (new Date(bookingInfo.dateE) <= new Date(bookingInfo.dateS)) {
        result = false;
      }
      setValidator(workValidator);
      return result;
    };

    if (checkBookingInfo()) {
      dispatch({
        type: RESERVATION_ROOM,
        roomId: room.id,
        bookingInfo,
      });
    }
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="form-dialog-title"
      disableBackdropClick
    >
      <DialogTitle>預約時段</DialogTitle>
      <DialogContent>
        <div className={styles.separationLine}>
          <SeparationLine />
        </div>
        <div>
          <TextField
            autoFocus
            error={validator.name.result}
            margin="dense"
            label="姓名"
            value={bookingInfo.name}
            onChange={(e) => {
              setBookingInfo({
                ...bookingInfo,
                name: e.target.value,
              });
            }}
            classes={{ root: classes.input, }}
          />
          <FormHelperText error={validator.name.result}>
            {validator.name.message}
          </FormHelperText>
        </div>
        <div>
          <TextField
            error={validator.tel.result}
            margin="dense"
            label="電話"
            value={bookingInfo.tel}
            onChange={(e) => {
              setBookingInfo({
                ...bookingInfo,
                tel: e.target.value,
              });
            }}
            classes={{ root: classes.input, }}
          />
          <FormHelperText error={validator.tel.result}>
            {validator.tel.message}
          </FormHelperText>
        </div>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              margin="normal"
              label="預約起日"
              minDate={new Date(new Date().addDays(1))}
              minDateMessage="選擇日期小於可預約範圍"
              maxDate={new Date(new Date().addDays(90))}
              maxDateMessage="選擇日期超過可預約範圍"
              value={bookingInfo.dateS}
              onChange={(value) => {
                if (isInvalidDate(value)) {
                  setBookingInfo({
                    ...bookingInfo,
                    dateS: moment(value).format('YYYY-MM-DD'),
                  });
                }
              }}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              classes={{ root: classes.datePicker, }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              margin="normal"
              label="預約訖日"
              minDateMessage="選擇日期小於可預約範圍"
              minDate={new Date(new Date(bookingInfo.dateS).addDays(1))}
              maxDateMessage="選擇日期超過可預約範圍"
              maxDate={new Date(new Date().addDays(90))}
              value={bookingInfo.dateE}
              onChange={(value) => {
                if (isInvalidDate(value)) {
                  setBookingInfo({
                    ...bookingInfo,
                    dateE: moment(value).format('YYYY-MM-DD'),
                  });
                }
              }}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              classes={{ root: classes.datePicker, }}
            />
          </MuiPickersUtilsProvider>
        </div>
      </DialogContent>
      <div className={styles.chooseDayInfo}>
        <div className={styles.dayInfoLine}>
          <div>平日時段</div>
          <div>
            {`${hotel.getNormalDayCount(bookingInfo.dateS, bookingInfo.dateE)}夜`}
          </div>
        </div>
        <div className={styles.dayInfoLine}>
          <div>假日時段</div>
          <div>
            {`${hotel.getHolidayPriceCount(bookingInfo.dateS, bookingInfo.dateE)}夜`}
          </div>
        </div>
      </div>
      <div className={styles.totalPrice}>
        <span>
          {`=  NT. ${hotel.getTotalPrice(
            bookingInfo.dateS,
            bookingInfo.dateE,
            {
              normal: room.normalDayPrice,
              holiday: room.holidayPrice,
            }
          )}`}
        </span>
      </div>
      <DialogActions>
        <div className={styles.actionButton}>
          <Button
            onClick={() => {
              setBookingInfo({ ...initState, });
              closeBooking();
            }}
            classes={{ root: classes.closeButton, }}
          >
            {reservationResult.indexOf('成功') !== -1 ? '關閉視窗' : '取消預約'}
          </Button>
          <Button
            onClick={submitBooking}
            classes={{ root: classes.submitButton, }}
          >
            確定預約
          </Button>
        </div>
      </DialogActions>
      <div
        className={
          `${styles.reservationResult}
          ${reservationResult.indexOf('成功') !== -1 ? styles.success : ''}`
        }
      >
        {reservationResult}
      </div>
    </Dialog>
  );
};

export default HandleBooking;
