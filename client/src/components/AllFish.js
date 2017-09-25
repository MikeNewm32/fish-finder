import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class AllFish extends Component {
    constructor() {
        super();
        this.state = {
            fish: [],
            redirect: false
        }
    }
    componentWillMount() {

    }

    _fetchFish = async () => {
        
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AllFish;