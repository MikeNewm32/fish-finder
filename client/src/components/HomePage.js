import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';

const HomePageContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
height: 100vh;
width: 100vw;
background-image: url("http://www.habershamchamber.com/external/wcpages/wcmedia/images/lake_burton.jpg");
background-size: cover;
background-position: center;
h1 {
    margin: 10px;
    color: white;
}
`


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            atlantaWeather: []
        }
    }

    componentWillMount() {
        this._fetchWeather();
    }

    _fetchWeather = async () => {
        try {
            const res = await axios.get(`http://api.wunderground.com/api/e29cf912f30aade3/conditions/q/GA/Atlanta.json`)
            console.log(res.data.current_observation)
            await this.setState({atlantaWeather: res.data})
            return res.data
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        const weather = this.state.atlantaWeather.current_observation;
        console.log(weather);
        return (
            <HomePageContainer>
            {/* <Link to="/user/fishing_spots"><h1>Fishing Spots</h1></Link>
             */}
             <h1>Welcome to my fishing spots app!</h1>
             <h2>Current Weather in Atlanta: </h2>
             {/* {weather} */}
           </HomePageContainer>

        );
    }
}

export default HomePage;