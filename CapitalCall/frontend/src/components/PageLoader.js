import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WelcomePage from '../pages/Welcome';
import DashboardPage from '../pages/Dashboard';
import NewCallPage from '../pages/NewCall';
import ErrorPage from '../pages/Error'


const PageLoader = () => {
    return (
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/newcall' component={NewCallPage} />
        <Route exact path='/error' component={ErrorPage} />
      </Switch>
    );
}
export default PageLoader;
