import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FishingSpotsStyle = styled.div`
  display: flex:
  justify-content: center;
  width: 30%;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  
  img {
    width: 100%;
    max-height: 200px;
  }
  h3{
    padding: 5px 0;
    text: center;
  }
`;

const FishingSpotsCard = (props) => {
  const fishing_spot = props.fishing_spot;
  console.log(fishing_spot.id);
  return (
    <FishingSpotsStyle>
      <Link to={`/user/${props.userId}/fishing_spots/${fishing_spot.id}`}>
        <h3>{fishing_spot.title}</h3>
        <img src={fishing_spot.image} alt="" />
      </Link>
    </FishingSpotsStyle>
  );
};

export default FishingSpotsCard;