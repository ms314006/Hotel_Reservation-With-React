import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Rooms from '../Rooms';

const Main = (): JSX.Element => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Rooms" component={Rooms} />
    </Switch>
  </>
);

export default Main;
