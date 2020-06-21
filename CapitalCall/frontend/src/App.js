import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import './App.css';
import logo from './logo.png';

import WelcomePage from './components/Welcome';
import DashboardPage from './components/Dashboard';
import NewCallPage from './components/NewCall';
import ErrorPage from './components/Error';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <switch>
           <Route path="/" component={WelcomePage} exact />
           <Route path="/dashboard" component={DashboardPage} />
           <Route path="/newcall" component={NewCallPage} />
           <Route component={ErrorPage}/>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
