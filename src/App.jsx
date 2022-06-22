import React, { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const INITIAL_EXPENSES = [
  { title: "TV", date: new Date(2018, 1, 28), price: 22.2, id: "1" },
  { title: "PS", date: new Date(2020, 2, 28), price: 21.2, id: "2" },
  { title: "XBOX", date: new Date(2022, 3, 28), price: 27.2, id: "3" },
  { title: "XBOX", date: new Date(2021, 4, 28), price: 27.2, id: "4" },
  { title: "XBOX", date: new Date(2021, 5, 28), price: 27.2, id: "5" },
  { title: "XBOX", date: new Date(2021, 6, 28), price: 27.2, id: "6" },
];

const App = () => {
  const [yearFilter, setYearFilter] = useState("2022");
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [formVisibility, setFormVisibility] = useState(false);

  const pushExpense = (data) => {
    setExpenses([data, ...expenses]);
  };

  const changeYear = (year) => {
    setYearFilter(year);
  };

  const toggleForm = () => {
    formVisibility ? setFormVisibility(false) : setFormVisibility(true);
  };

  const newExpense = (
    <NewExpense onSaveExpense={pushExpense} onCancel={toggleForm} />
  );

  return (
    <div className="container">
      <div className="nav">
        <h2 className="h2">Expenses Manager App</h2>
        {!formVisibility ? (
          <button onClick={toggleForm} className="btn">
            Create new
          </button>
        ) : (
          ""
        )}
      </div>
      {formVisibility ? newExpense : ""}
      <ExpensesFilter expenses={expenses} onChangeYear={changeYear} initialYear={yearFilter} />
      <ExpensesList expenses={expenses} year={yearFilter} />
    </div>
  );
};

export default App;
