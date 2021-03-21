import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/layout/Home';
import SignUp from '../components/auth/SignUp';
import Login from '../components/auth/Login';
import Feed from '../components/feed/Feed';
import Profile from '../components/profile/Profile';
import CreateProfile from '../components/profile/CreateProfile';
import EditProfile from '../components/profile/EditProfile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/feed' component={Feed} />
      <Route exact path='/profile/:id' component={Profile} />
      <Route exact path='/create-profile' component={CreateProfile} />
      <Route exact path='/edit-profile' component={EditProfile} />
    </Switch>
  );
};

export default Routes;
