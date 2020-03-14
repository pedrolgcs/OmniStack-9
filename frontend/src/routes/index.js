import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import New from '../pages/New';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new" component={New} />
    </Switch>
  );
}