import React, { useState } from "react";
import styled from "styled-components";

const ExpensesFilter = (props) => {
  const years = [2022, 2021, 2020, 2019, 2018];

  const changeHandler = (e) => {
    props.onChangeYear(e.target.value);
  };

  const options = years.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));

  return (
    <StyledExpenseFilter>
      <div className="control">
        <label>Filter by year</label>
        <select onChange={changeHandler} value={props.initialYear}>
          {options}
        </select>
      </div>
    </StyledExpenseFilter>
  );
};

const StyledExpenseFilter = styled.div`
  color: white;
  padding: 0 1rem;
  margin-top: 20px;

  & .control {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & select {
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }
`;

export default ExpensesFilter;
