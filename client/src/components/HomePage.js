import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    render() {
        return (
            <HomePageContainer>
            {/* <Link to="/user/fishing_spots"><h1>Fishing Spots</h1></Link>
             */}
             <h1>Welcome to my fishing spots app!</h1>
           </HomePageContainer>

        );
    }
}

export default HomePage;