import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const FishingSpotsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("http://www.habershamchamber.com/external/wcpages/wcmedia/images/lake_burton.jpg");
background-size: cover;
background-position: center;
`

class User extends Component{
  render(){
    return (
      <div>
        <h1>I am a user</h1>
      </div>
    )
  }
}


export default User;