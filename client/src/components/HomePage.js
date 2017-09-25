import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
`


class HomePage extends Component {
    render() {
        return (
            <HomePageContainer>
            {/* <Link to="/user/fishing_spots"><h1>Fishing Spots</h1></Link>
             */}
             Welcome to my fishing spots app!
           </HomePageContainer>

        );
    }
}

export default HomePage;