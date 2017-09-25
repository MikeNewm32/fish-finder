import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';

const HomePageContainer = styled.div`
// display: flex;
// flex-wrap: wrap;
// justify-content: center;
color: white;
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
            await this.setState({atlantaWeather: res.data.current_observation})
            return res.data.current_observation;
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        const weather = this.state.atlantaWeather;
        console.log(weather.temp_f);
        return (
            <HomePageContainer>
            {/* <Link to="/user/fishing_spots"><h1>Fishing Spots</h1></Link>
             */}
             <h1>Welcome to my fishing spots app!</h1>
             <h2>Current Weather in Atlanta: </h2>
             <img src={weather.icon_url} alt=''/>
             <h4>Temperature: {weather.temperature_string}</h4>
             <h4>Feels like: {weather.feelslike_string}</h4>
             <h4>Weather: {weather.weather}</h4>
             <h4>Wind: {weather.wind_string}</h4>
             <h4>{weather.observation_time}</h4>
             
             
           </HomePageContainer>

        );
    }
}

export default HomePage;