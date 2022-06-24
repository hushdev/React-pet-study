import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <StyledCard bgColor={props.bgColor} margin={props.margin}>
      {props.children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border-radius: 10px;
  padding: 15px;
  background-color: ${props => props.bgColor};
  margin: ${props => props.margin} 0;
`;

export default Card;
