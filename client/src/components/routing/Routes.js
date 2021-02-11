import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../layout/Home';
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
    </Switch>
  );
};

export default Routes;
