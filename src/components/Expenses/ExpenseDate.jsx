import React from "react";
import Card from "../UI/Card";

const ExpenseDate = (props) => {
  // Date props
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="expenseDate">
      <div className="expenseDate-month">{month}</div>
      <div className="expenseDate-day">{day}</div>
      <div className="expenseDate-year">{year}</div>
    </Card>
  );
}

export default ExpenseDate;
