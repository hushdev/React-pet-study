import React from "react";
import "./Chart.scss";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const pointsValues = props.points.map(point => point.value)
  const maxPointValue = Math.max(...pointsValues)

  return (
    <div className="chart">
      {props.points.map((point) => (
        <ChartBar
          key={point.label}
          label={point.label}
          value={point.value}
          maxValue={maxPointValue}
        />
      ))}
    </div>
  );
};

export default Chart;
