import * as actions from '../action/hotel';
import Hotel from '../class/Hotel';
import { IState } from '../interface/IState';

const initState: IState = {
  rooms: [],
  room: {
    room: [
      {
        amenities: {
          'Air-Conditioner': false,
          Breakfast: false,
          'Child-Friendly': false,
          'Great-View': false,
          'Mini-Bar': false,
          'Pet-Friendly': false,
          Refrigerator: false,
          'Room-Service': false,
          'Smoke-Free': false,
          Sofa: false,
          Television: false,
          'Wi-Fi': false,
        },
        checkInAndOut: {
          checkInEarly: '--:--',
          checkInLate: '--:--',
          checkOut: '--:--',
        },
        description: '...',
        descriptionShort: {
          Bed: ['--', '--'],
          Footage: 0,
          GuestMax: 0,
          GuestMin: 0,
          'Private-Bath': 0,
        },
        holidayPrice: 0,
        id: '',
        imageUrl: ['' ,'' ,''],
        name: '',
        normalDayPrice: 0,
      }
    ],
    booking: [],
  },
  reservationResult: '',
  hotel: new Hotel(),
};

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case actions.GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.payload.items,
      };
    case actions.GET_ROOM_SUCCESS:
      return {
        ...state,
        room: action.payload.data,
      };
    case actions.RESERVATION_ROOM_ING:
      return {
        ...state,
        reservationResult: '處理中，請稍候...',
      };
    case actions.RESERVATION_ROOM_SUCCESS:
      return {
        ...state,
        reservationResult: action.payload.reservationMessage,
      };
    default:
      return state;
  }
};

export default reducer;
