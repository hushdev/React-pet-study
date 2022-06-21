import React, {useState} from "react";
import ExpensesList from './components/Expenses/ExpensesList';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from './components/Expenses/ExpensesFilter';

const App = () => {
  const [yearFilter, setYearFilter] = useState('2022')

  const expenses = [
    { title: "TV", date: new Date(2022, 3, 28), price: 22.2 },
    { title: "PS", date: new Date(2022, 3, 28), price: 21.2 },
    { title: "XBOX", date: new Date(2022, 3, 28), price: 27.2 },
    { title: "LAPTOP", date: new Date(2022, 3, 28), price: 24.2 },
    { title: "NEW PHONE", date: new Date(2022, 3, 28), price: 22.2 },
  ];

  const pushExpense = (data) => {
    console.log(data);
  }

  const changeYear = (year) => {
    setYearFilter(year);
  }

  return (
    <div className="container">
      <h2 className="h2">Expenses Manager App</h2>
      <NewExpense onSaveExpense={pushExpense}/>
      <ExpensesFilter onChangeYear={changeYear}/>
      <ExpensesList expenses={expenses} year={yearFilter}/>
    </div>
  );
}

export default App;
