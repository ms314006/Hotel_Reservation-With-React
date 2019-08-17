import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Rooms from '../Rooms';
import Room from '../Room';

const Main = (): JSX.Element => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Rooms" component={Rooms} />
      <Route exact path="/Room/:roomId" component={Room} />
    </Switch>
  </>
);

export default Main;
