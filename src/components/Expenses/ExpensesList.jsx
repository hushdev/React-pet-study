import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const ExpensesList = (props) => {
  let year = props.year;

  let filteredItems = props.expenses
    .filter((item) => item.date.getFullYear().toString() === year)
    .map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        price={item.price}
      />
    ));

  let noItemsText = (
    <span className="card_dark-span">The list is empty</span>
  );

  return (
    <>
      <ExpensesChart expenses={filteredItems}/>
      <Card bgColor="#2d2d2d">{filteredItems.length ? filteredItems : noItemsText}</Card>
    </>
  );
};

export default ExpensesList;
