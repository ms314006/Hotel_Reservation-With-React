import axios from 'axios';
import moment from 'moment';
import { IHotel } from '../interface/IHotel';
import { apiUrl, token } from '../asset';
import { roomsListOutsideBlock } from '../component/Rooms/index.scss';

const headers = {
  Authorization: `Bearer ${token}`,
  accept: 'application/json',
};

class Hotel implements IHotel {

  normalDay: number[] = [1, 2, 3, 4]

  holiDay: number[] = [5, 6, 0]

  private DateDiff = (sDate1: string, sDate2: string): number => {
    let aDate = sDate1.split('-');
    const oDate1 = new Date(`${aDate[1]}/${aDate[2]}/${aDate[0]}`);
    aDate = sDate2.split('-');
    const oDate2 = new Date(`${aDate[1]}/${aDate[2]}/${aDate[0]}`);
    const iDays = Math.abs(Number(oDate1) - Number(oDate2)) / 1000 / 60 / 60 / 24;
    return parseInt(String(iDays), 10);
  };

  private getCountWithDayKind = (kind: string, dateS: string, dateE: string) => {
    let result = 0;
    if (!dateS && !dateE) {
      return result;
    }
    const gapDay = this.DateDiff(dateS, dateE);
    Array(...new Array(gapDay)).forEach((value, index): void => {
      const workDate = new Date(dateS).addDays(index);
      switch (kind) {
        case 'normal':
          if (this.normalDay.indexOf(workDate.getDay()) !== -1) {
            result += 1;
          }
          break;
        case 'holiday':
          if (this.holiDay.indexOf(workDate.getDay()) !== -1) {
            result += 1;
          }
          break;
        default:
      }
    });
    return result;
  }

  getNormalDayCount = (dateS: string, dateE: string): number => (
    this.getCountWithDayKind('normal', dateS, dateE)
  )

  getHolidayPriceCount = (dateS: string, dateE: string): number => (
    this.getCountWithDayKind('holiday', dateS, dateE)
  )

  getTotalPrice = (dateS: string, dateE: string, price: any): number => {
    const normalCount = this.getNormalDayCount(dateS, dateE);
    const holidayCount = this.getHolidayPriceCount(dateS, dateE);
    return (normalCount * price.normal) + (holidayCount * price.holiday);
  }

  getRooms = (): any => (
    axios.request({
      url: `${apiUrl}/rooms`,
      headers,
    })
  )

  getRoom = (id: string): any => (
    axios.request({
      url: `${apiUrl}/room/${id}`,
      headers,
    })
  )

  reservationRoom = (roomId: string, bookingInfo: any): any => {
    const bookingDate: string[] = [];
    const gapDay = this.DateDiff(bookingInfo.dateS, bookingInfo.dateE);
    Array(...new Array(gapDay)).forEach((value, index): void => {
      const workDate = new Date(bookingInfo.dateS).addDays(index);
      bookingDate.push(moment(workDate).format('YYYY-MM-DD'));
    });
    return (
      axios.request({
        method: 'post',
        url: `${apiUrl}/room/${roomId}`,
        headers,
        data: {
          name: bookingInfo.name,
          tel: bookingInfo.tel,
          date: bookingDate,
        },
      }).catch(error => error.response)
    );
  }

  deleteAllReservation = (): boolean => {
    return false;
  }
}

export default Hotel;
