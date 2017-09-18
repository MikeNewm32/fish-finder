import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
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
          redirect: false
      };
  }

componentWillMount(){
      const fishingSpotId = this.props.match.params.id;
      this._fetchFishingSpotAndFish();
      
  }

  _fetchFishingSpotAndFish = async () => {
      try {
          const id = this.props.match.params.id;
          const res = await axios.get(`/api/fishing_spots/${id}`)
          this.setState({
           fishing_spot: res.data.fishing_spot
           fish: res.data.fish
          })
        
          return res.data
          console.log(res.data)
      }
      catch(err) {
          console.log(err)
      }
  }
  _deleteFishingSpot = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.delete(`/api/fishing_spots/${this.props.match.params.id}`)
          this.setState({redirect: true})
          return res.data
          

      } catch(err) {
          console.log(err)
      }
  }

  render() {
    return (
            <div>
            <FishingSpotStyle>
            <img src={this.state.fishing_spot.image} />
            <h1>Name:{this.state.fishing_spot.title}</h1>
            <h2>Description:{this.state.fishing_spot.description}</h2>
            <h2>Location:{this.state.fishing_spot.location}</h2>
            <h2>Fish:</h2>
            {/* <FishList fish={this.state.fish} fishingSpotsId={this.props.match.params.id}/> */}
            <Link to={`/fishing_spots/${this.props.match.params.id}/edit`}><button>Edit Fishing Spot</button></Link>
            <button onClick={this._deleteFishingSpot}>Delete This Location</button>
            </FishingSpotStyle>
            </div>
    )
  }
}

export default FishingSpot;