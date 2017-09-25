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
    const userId = this.props.match.params.userId;
    this._fetchFishingSpots(userId);
  }

  _fetchFishingSpots = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}/fishing_spots`);
      const fishing_spots = response.data;
      this.setState({fishing_spots});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render(){
    const userId = this.props.match.params.userId;
    return (
      <FishingSpotsContainer>
        {this.state.fishing_spots.map((fishing_spot) => (
        <FishingSpotsCard key={fishing_spot.id} fishing_spot={fishing_spot} userId={userId} />
        ))}
        <Link to={`/user/${userId}/new_fishing_spot`}> New Lake </Link>
      </FishingSpotsContainer>
    )
  }
}

export default AllFishingSpots;