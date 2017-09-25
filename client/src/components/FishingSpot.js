import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import FishCard from './FishCard';
// import FishList from './FishList'

const FishingSpotStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100vh;
width: 100vw;
background-image: url("http://www.habershamchamber.com/external/wcpages/wcmedia/images/lake_burton.jpg");
background-size: cover;
background-position: center;
  img {
    max-height: 400px;
    width: 100%;
  }
  h1, p {
    font-family: 'Fjalla One', sans-serif;
  }
`;


class FishingSpot extends Component {
  constructor(){
      super();
      this.state = {
          fishing_spot: {
              title: '',
              description:'',
              location:'',
              image:''
          },
          fish: [],
          redirect: false
      };
  }

    componentWillMount(){
        const userId = this.props.match.params.userId;
        const fishingSpotId = this.props.match.params.fishingSpotId;
        this._fetchFishingSpot(userId, fishingSpotId);
        this._fetchAllFish(userId, fishingSpotId);
    }

  _fetchFishingSpot = async (userId, fishingSpotId) => {
      try {
          const res = await axios.get(`/api/users/${userId}/fishing_spots/${fishingSpotId}`)
          this.setState({
           fishing_spot: res.data
          })
          return res.data
          console.log(res.data)
      }
      catch(err) {
          console.log(err)
      }
  }

  _fetchAllFish = async (userId, fishingSpotId) => {
    try {
        const res = await axios.get(`/api/users/${userId}/fishing_spots/${fishingSpotId}/fish`)
        console.log(res.data)
        await this.setState({fish: res.data})
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}
  
  _deleteFishingSpot = async (e) => {
      e.preventDefault();
      const userId = this.props.match.params.userId
      const fishingSpotId = this.props.match.params.fishingSpotId;
      try {
          const res = await axios.delete(`/api/users/${userId}/fishing_spots/${fishingSpotId}`)
          this.setState({redirect: true})
          return res.data
          

      } catch(err) {
          console.log(err)
      }
  }

  render() {
    const userId = this.props.match.params.userId
    const fishingId = this.props.match.params.fishingSpotId
    return (
            <div>
                {this.state.redirect ?
                <Redirect to={`/user/${userId}/my_fishing_spots`}/>
                :
                <div>
            <FishingSpotStyle>
            <img src={this.state.fishing_spot.image} />
            <h1>Name:{this.state.fishing_spot.title}</h1>
            <h2>Description:{this.state.fishing_spot.description}</h2>
            <h2>Location:{this.state.fishing_spot.location}</h2>
            <h2>Fish:</h2>
            {this.state.fish.map((fish) => {
                return <FishCard userId={userId} fishingId={fishingId} fish={fish} key={fish.id}/>
            })}
            <Link to={`/user/${userId}/edit_fishing_spots/${fishingId}`}><button>Edit Fishing Spot</button></Link>
            <button onClick={this._deleteFishingSpot}>Delete This Location</button>
            
            </FishingSpotStyle>
            </div>
                }
            </div>
    )
  }
}

export default FishingSpot;