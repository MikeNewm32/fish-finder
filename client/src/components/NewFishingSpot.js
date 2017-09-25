import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class NewFishingSpot extends Component {
    constructor() {
        super();
        this.state = {
            newFishingSpot: {
                title: '',
                description: 'no description available',
                location: '',
                image: 'http://www.visitmysmokies.com/wp-content/uploads/2013/08/Man-Fishing-in-the-Sunset.jpg'
            },
            redirect: false
        }
    }
    
    _handleChange = (e) => {
        const newState = {...this.state.newFishingSpot}
        newState[e.target.title] = e.target.value;
        this.setState({
            newSection: newState
        })
    }

    _submitFishingSpot = async (e) => {
        e.preventDefault();
        const fishingSpotId = this.props.match.params.fishingSpotId;
        
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default NewFishingSpot;