import React, { Component } from 'react';

class EditFish extends Component {
    constructor() {
        super();
        this.state= {
            fish: {},
            redirect: false
        }
    }
    componentWillMount() {
        const userId = this.props.match.params.userId;
        const fishingSpotId = this.props.match.params.fishingSpotId;
        const fishId = this.props.match.params.fishId;
        this._fetchFish(userId, fishingSpotId, fishId);
    }
    _fetchFish = async (userId, fishingSpotId, fishId) => {
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default EditFish;