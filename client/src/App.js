import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AllFishingSpots from './components/AllFishingSpots';
import FishingSpot from './components/FishingSpot';
import EditFishingSpot from './components/EditFishingSpot';
import GlobalNav from './components/GlobalNav';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import User from './components/User';
import styled from 'styled-components';
import {setAxiosDefaults} from './util';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path='/' component={AllFishingSpots} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/user/' component={User} />
          <Route exact path='/fishing_spots' component={AllFishingSpots} />
          <Route exact path='/fishing_spots/:id' component={FishingSpot} />
          <Route exact path='/fishing_spots/:id/edit' component={EditFishingSpot} />

       </div>
      </Router>
    );
  }
}

export default App;
