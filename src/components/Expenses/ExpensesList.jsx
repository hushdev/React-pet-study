import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpensesList = (props) => {
  let year = props.year;

  return (
    <Card className="card_dark">
      {year}
      {props.expenses.map((item) => (
        <ExpenseItem
          title={item.title}
          date={item.date}
          price={item.price}
          key={item.title}
        />
      ))}
    </Card>
  );
};

export default ExpensesList;
