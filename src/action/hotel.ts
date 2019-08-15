import {
  call, put, select, takeEvery
} from 'redux-saga/effects';

export const GET_ROOMS = 'GET_ROOMS';
export const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';

export function* getRooms() {
  const hotel = yield select(state => state.hotel);
  const { data: { items, }, } = yield call(hotel.getRooms);
  yield put({ type: GET_ROOMS_SUCCESS, payload: { items, }, });
}

export const GET_ROOM = 'GET_ROOM';
export const GET_ROOM_SUCCESS = 'GET_ROOM_SUCCESS';

export function* getRoom(param: any) {
  const hotel = yield select(state => state.hotel);
  const { data, } = yield call(hotel.getRoom, param.roomId);
  yield put({ type: GET_ROOM_SUCCESS, payload: { data, }, });
}

export const RESERVATION_ROOM = 'RESERVATION_ROOM';

export const reservationRoom = (
  roomId: string, name: string, tel: string, date: string[]
) => ({
  type: RESERVATION_ROOM,
  payload: {
    roomId,
    name,
    tel,
    date,
  },
});

export const DELETE_ALL_RESERVATION = 'DELETE_ALL_RESERVATION';

export const deleteAllReservation = () => ({
  type: DELETE_ALL_RESERVATION,
});

function* mySaga() {
  yield takeEvery(GET_ROOMS, getRooms);
  yield takeEvery(GET_ROOM, getRoom);
}

export default mySaga;
