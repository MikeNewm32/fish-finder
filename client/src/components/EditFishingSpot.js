
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components'


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
`;


class EditFishingSpot extends Component {
    constructor() {
        super();
        this.state = {
            fishing_spot: {
                title: '',
                description: '',
                image: ''
            },
            redirect: false
        }
    }

    componentWillMount() {
        const userId = this.props.match.params.userId;
        const fishingId = this.props.match.params.fishingSpotId;
        this._fetchFishingSpot(userId, fishingId)
    }
    
    _fetchFishingSpot = async (userId, fishingId) => {
        try {
            const res = await axios.get(`/api/users/${userId}/fishing_spots/${fishingId}`);
            console.log(res.data)
            await this.setState({fishing_spot: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.fishing_spot}
        newState[e.target.name] = e.target.value
        this.setState({fishing_spot: newState})
    }

    _editFishingSpot = (e) => {
        e.preventDefault();
        const userId = this.props.match.params.userId
        const fishingId = this.props.match.params.fishingSpotId
        const payload = this.state.fishing_spot
        payload.user_id = userId;
        try {
            const res = axios.put(`/api/users/${userId}/fishing_spots/${fishingId}`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const userId = this.props.match.params.userId;
        return (
            <div>
                {this.state.redirect? 
                <Redirect to={`/user/${userId}/my_fishing_spots`}/>
                :
                <div>
                <form onSubmit={this._editFishingSpot}>
                    <div>
                        <label htmlFor="title">Lake Name: </label>
                        <input onChange={this._handleChange} type="text" name="title" value={this.state.fishing_spot.title} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.fishing_spot.description} />
                    </div>
                    <div>
                        <label htmlFor="location">Location: </label>
                        <input onChange={this._handleChange} type="text" name="location" value={this.state.fishing_spot.location} />
                    </div>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.fishing_spot.image} />
                    </div>
                    <button>Submit</button>
                </form>
                </div>
                }
            </div>
        );
    }
}

export default EditFishingSpot;