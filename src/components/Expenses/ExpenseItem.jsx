import React, { useState } from "react";
import "./ExpenseItem.scss";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <Card className="expense-item">
      <div className="expense-item-title">
        <ExpenseDate date={props.date} />
        <h2 className="expense-item_title">{title}</h2>
      </div>
      <div className="expense-item_price">${props.price}</div>
    </Card>
  );
};

export default ExpenseItem;
