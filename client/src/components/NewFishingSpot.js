import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class NewFishingSpot extends Component {
    constructor() {
        super();
        this.state = {
            newFishingSpot: {
                title: '',
                description: '',
                location: '',
                image: '',
                user_id: 0
            },
            redirect: false
        }
    }
    
    _handleChange = (e) => {
        e.preventDefault();
        const newState = {...this.state.newFishingSpot}
        newState[e.target.name] = e.target.value;
        this.setState({
            newFishingSpot: newState
        });
    }

    _submitSpot = async (e) => {
        e.preventDefault();
        const userId = this.props.match.params.userId;
        this.state.newFishingSpot.user_id = userId;
        const payload = this.state.newFishingSpot
        const res = await axios.post(`/api/users/${userId}/fishing_spots`, payload)
        this.setState({redirect: true});
    }
      
    render() {
        const userId = this.props.match.params.userId;
        return (
        <div>
            {this.state.redirect? 
                <Redirect to={`/user/${userId}/my_fishing_spots`}/>
                :
                <form onSubmit={this._submitSpot}>
                    <div>
                        <label htmlFor="title">Lake Name: </label>
                        <input onChange={this._handleChange} type="text" name="title" value={this.state.newFishingSpot.title} required/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.newFishingSpot.description} />
                    </div>
                    <div>
                        <label htmlFor="location">Location: </label>
                        <input onChange={this._handleChange} type="text" name="location" value={this.state.newFishingSpot.location} required/>
                    </div>
                    <div>
                        <label htmlFor="image">Image URL: </label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.newFishingSpot.image} />
                    </div>
                    <button>Add Section To Project</button>
                </form>
            }

            
        </div>
        )
        }
        }

export default NewFishingSpot;