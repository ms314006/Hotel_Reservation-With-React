import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { IState } from '../../interface/IState';
import { GET_ROOMS, GET_ROOM } from '../../action/hotel';

const MainPrototype = (props: any) => {
  const rooms = useSelector((state: IState) => state.rooms);
  const room = useSelector((state: IState) => state.room);
  const dispatch = useDispatch();
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => { dispatch({ type: GET_ROOMS, }) }}
        data-testid="button"
      >
        取得房間資料
      </Button>
      <ul>
        {rooms.map(room => (
          <li
            key={room.id}
            onClick={() => { dispatch({ type: GET_ROOM, roomId: room.id, }) }}
          >
            {room.name}
          </li>
        ))}
      </ul>
      <div>
        房間資料
        <div>
          {JSON.stringify(room)}
        </div>
      </div>
    </>
  );
};

export default MainPrototype;
