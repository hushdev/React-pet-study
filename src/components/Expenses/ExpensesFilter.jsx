import React, { useState } from "react";
import "./ExpensesFilter.scss";

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
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeHandler} value={props.initialYear}>
          {options}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;