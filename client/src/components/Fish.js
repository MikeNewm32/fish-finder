import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Fish extends Component {
    constructor() {
        super();
        this.state = {
            fish: {},
            redirect: false
        }
    }
    componentWillMount() {
        const userId = this.props.match.params.userId;
        const fishingSpotId = this.props.match.params.fishingSpotId;
        const fishId = this.props.match.params.fishId;
        this._fetchFish(userId, fishingSpotId, fishId)
    }

    _fetchFish = async (userId, fishingSpotId, fishId) => {
        try {
            const res = await axios.get(`/api/users/${userId}/fishing_spots/${fishingSpotId}/fish/${fishId}`)
            await this.setState({fish: res.data})
            return res.data
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const userId = this.props.match.params.userId;
        const fishingSpotId = this.props.match.params.fishingSpotId;
        const fishId = this.props.match.params.fishId;
        return (
            <div>
                {this.state.fish.name}
                <img src={this.state.fish.photo} />
                <span>length: {this.state.fish.length}</span>
                <br />
                <span>weight: {this.state.fish.weight}</span>
                {this.state.fish.description}
                <Link to={`/user/${userId}/fishing_spots/${fishingSpotId}/editfish/${fishId}`}>Edit Fish</Link>
            </div>
        );
    }
}

export default Fish;