import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const FishCardStyle = styled.div`
display: flex:
justify-content: center;
width: 30%;
margin: 20px 0; 
box-shadow: 1px 1px 5px black;
color: white;

img {
  width: 100%;
  max-height: 200px;
}
h3{
  padding: 5px 0;
  text: center;
}
`;

const FishCard = (props) => {
    const fish = props.fish;
    const fishId = fish.id;
    const userId = props.userId;
    const fishingId = props.fishingId;
    return (
        <FishCardStyle>
            <Link to={`/user/${userId}/fishing_spots/${fishingId}/fish/${fishId}`}>{fish.name}</Link>
            <img src={fish.photo} />
            <span>length: {fish.length}</span>
            <br />
            <span>weight: {fish.weight}</span>
            {fish.description}
        </FishCardStyle>
    );
};

export default FishCard;