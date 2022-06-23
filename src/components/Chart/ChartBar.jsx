import React from "react";
import styled from "styled-components";

const ChartBar = (props) => {
  let chartHeight = "0%";

  if (props.maxValue > 0) {
    chartHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <StyledChartBar barHeight={chartHeight}>
      <div className="inner">
        <div className="fill"></div>
      </div>
      <div className="label">{props.label}</div>
    </StyledChartBar>
  );
};

const StyledChartBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .inner {
    height: 100%;
    width: 100%;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  & .fill {
    background-color: #4826b9;
    width: 100%;
    height: ${props => props.barHeight};
    transition: all 0.3s ease-out;
  }

  & .label {
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
  }
`;

export default ChartBar;
