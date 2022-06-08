import React from "react";
import "./ExpenseItem.scss";

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item-title">
        <ExpenseDate date={props.date}/>
        <h2 className="expense-item_title">{props.title}</h2>
      </div>
      <div className="expense-item_price">${props.price}</div>
    </Card>
  );
}

export default ExpenseItem;
