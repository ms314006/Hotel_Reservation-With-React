import * as actions from '../action/hotel';
import { IState } from '../interface/IState';
import Hotel from '../class/Hotel';

const initState: IState = {
  rooms: [],
  room: {},
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
    default:
      return state;
  }
};

export default reducer;
