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
import Fish from './components/Fish';
import EditFish from './components/EditFish';
import {setAxiosDefaults} from './util';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App-body-container">
          <GlobalNav />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/user/:userId/my_fishing_spots' component={AllFishingSpots} />
          <Route exact path='/user/:userId/fishing_spots/:fishingSpotId' component={FishingSpot} />
          <Route exact path='/user/:userId/edit_fishing_spots/:fishingSpotId/' component={EditFishingSpot} />
          <Route exact path='/user/:userId/fishing_spots/:fishingSpotId/fish/:fishId' component={Fish} />
          <Route exact path='/user/:userId/fishing_spots/:fishingSpotId/editfish/:fishId' component={EditFish} />
       </div>
      </Router>
    );
  }
}

export default App;
