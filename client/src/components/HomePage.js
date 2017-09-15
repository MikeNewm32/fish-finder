import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("http://www.habershamchamber.com/external/wcpages/wcmedia/images/lake_burton.jpg");
background-size: cover;
background-position: center;
`


class HomePage extends Component {
    render() {
        return (
            <HomePageContainer>
            <Link to="/fishing_spots"><h1>Fishing Spots</h1></Link>
           </HomePageContainer>

        );
    }
}

export default HomePage;