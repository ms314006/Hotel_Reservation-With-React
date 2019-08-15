import axios from 'axios';
import { IHotel } from '../interface/IHotel';
import { apiUrl, token } from '../asset';

const headers = {
  Authorization: `Bearer ${token}`,
  accept: 'application/json',
};

class Hotel implements IHotel {
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

  reservationRoom = (name: string, tel: string, date: string[]): boolean => {
    console.log(name, tel, date);
    return false;
  }

  deleteAllReservation = (): boolean => {
    return false;
  }
}

export default Hotel;
