import React from "react";
import Card from "../UI/Card";

const ExpenseDate = (props) => {
  // Date props
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="expenseDate">
      <div className="month">{month}</div>
      <div className="day">{day}</div>
      <div className="year">{year}</div>
    </Card>
  );
}

export default ExpenseDate;
