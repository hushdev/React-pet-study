import React, {useState} from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [value, setValue] = useState('2022'); 
  const years = [2022, 2021, 2020, 2019];

  const changeHandler = (e) => {
    setValue(e.target.value);
    props.onChangeYear(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeHandler} value={value}>
          {years.map((year) => (
            <option value={year} key={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
