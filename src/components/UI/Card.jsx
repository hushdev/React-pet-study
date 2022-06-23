import React from "react";
import styled from "styled-components";
// import "./Card.scss";

const Card = (props) => {
  return (
    <StyledCard bgColor={props.bgColor}>
      {props.children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border-radius: 10px;
  padding: 15px;
  background-color: ${props => props.bgColor};
`;

export default Card;
