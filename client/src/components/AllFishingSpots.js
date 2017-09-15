import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import FishingSpotsCard from './FishingSpotsCard';

const FishingSpotsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100vh;
width: 100vw;
background-image: url("http://www.habershamchamber.com/external/wcpages/wcmedia/images/lake_burton.jpg");
background-size: cover;
background-position: center;
`;

class AllFishingSpots extends Component{
  constructor(){
    super();
    this.state = {
      error: '',
      fishing_spots: []
    }
  }

  componentWillMount(){
    this._fetchFishingSpots();
  }

  _fetchFishingSpots = async () => {
    try {
      const response = await axios.get('/api/fishing_spots');
      const fishing_spots = response.data;
      this.setState({fishing_spots});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render(){
    return (
      <FishingSpotsContainer>
        {this.state.fishing_spots.map((fishing_spots) => (
        <FishingSpotsCard key={fishing_spots.id} fishing_spots={fishing_spots} />
        ))}
      </FishingSpotsContainer>
    )
  }
}

export default AllFishingSpots;