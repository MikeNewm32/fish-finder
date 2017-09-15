import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FishingSpotsStyle = styled.div`
  width: 30%;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  
  img {
    width: 100%;
    max-height: 200px;
  }
  h3{
    padding: 5px 0;
  }
`;

const FishingSpotsCard = (props) => {
  const fishing_spots = props.fishing_spots;
  return (
    <FishingSpotsStyle>
      <Link to={`/fishing_spots/${fishing_spots.id}`}>
      <h3>{fishing_spots.title}</h3>
      <img src={fishing_spots.image} alt={fishing_spots.name} />
      </Link>
    </FishingSpotsStyle>
  );
};

export default FishingSpotsCard;