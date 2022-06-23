import React from "react";
import styled from "styled-components";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const pointsValues = props.points.map((point) => point.value);
  const maxPointValue = Math.max(...pointsValues);

  return (
    <StyledChart>
      {props.points.map((point) => (
        <ChartBar
          key={point.label}
          label={point.label}
          value={point.value}
          maxValue={maxPointValue}
        />
      ))}
    </StyledChart>
  );
};

const StyledChart = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
  margin-bottom: 20px;
`;

export default Chart;
