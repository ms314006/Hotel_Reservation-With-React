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

export const GET_ROOM_ING = 'GET_ROOM_ING';
export const GET_ROOM = 'GET_ROOM';
export const GET_ROOM_SUCCESS = 'GET_ROOM_SUCCESS';

export function* getRoom(param: any) {
  yield put({ type: GET_ROOM_ING, });
  const hotel = yield select(state => state.hotel);
  const { data, } = yield call(hotel.getRoom, param.roomId);
  yield put({ type: GET_ROOM_SUCCESS, payload: { data, }, });
}

export const RESERVATION_ROOM_ING = 'RESERVATION_ROOM_ING';
export const RESERVATION_ROOM = 'RESERVATION_ROOM';
export const RESERVATION_ROOM_SUCCESS = 'RESERVATION_ROOM_SUCCESS';

export function* reservationRoom(param: any) {
  yield put({ type: RESERVATION_ROOM_ING, });
  const hotel = yield select(state => state.hotel);
  const response = yield call(hotel.reservationRoom, param.roomId, param.bookingInfo);
  const reservationMessage = response.data ? '已成功訂房：）' : response.data.message;
  yield put({ type: RESERVATION_ROOM_SUCCESS, payload: { reservationMessage, }, });
  yield getRoom({ type: GET_ROOM, roomId: param.roomId, });
}

export const DELETE_ALL_RESERVATION = 'DELETE_ALL_RESERVATION';

export const deleteAllReservation = () => ({
  type: DELETE_ALL_RESERVATION,
});

function* mySaga() {
  yield takeEvery(GET_ROOMS, getRooms);
  yield takeEvery(GET_ROOM, getRoom);
  yield takeEvery(RESERVATION_ROOM, reservationRoom);
}

export default mySaga;
