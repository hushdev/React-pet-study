import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const ExpensesList = (props) => {
  let year = props.year;

  let items = props.expenses
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
    <span className="card_dark-span">There is no any expense</span>
  );

  return (
    <>
      <ExpensesChart expenses={items}/>
      <Card className="card_dark">{items.length ? items : noItemsText}</Card>
    </>
  );
};

export default ExpensesList;
