
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
            }
        }
    }

    componentWillMount() {
        const userId = this.props.match.params.userId
        this._fetchFishingSpot(userId)
    }
    
    _fetchFishingSpot = async (userId) => {
        const id = this.props.match.params.fishingSpotId
        try {
            const res = await axios.get(`/api/users/${userId}/fishing_spots/${id}`);
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
        const id = this.props.match.params.fishingSpotId
        const payload = this.state.fishing_spot
        try {
            const res = axios.put(`/api/users/${userId}/edit_fishing_spots/${id}`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.fishing_spot.id
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this._handleChange} type="text" name="title" value={this.state.fishing_spot.title} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.fishing_spot.description} />
                    </div>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.fishing_spot.image} />
                    </div>
                    <button onClick={this._editFishingSpot}>Submit</button>
                </form>
                <br />
            </div>
        );
    }
}

export default EditFishingSpot;