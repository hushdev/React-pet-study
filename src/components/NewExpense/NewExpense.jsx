import React from "react";
import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm.jsx";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const saveExpense = (data) => {
    const newData = {
      ...data,
      //unique ID
      id: (performance.now().toString(36) + Math.random().toString(36)).replace(
        /\./g,
        ""
      ),
    };
    props.onSaveExpense(newData)
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpense={saveExpense} />
    </Card>
  );
};

export default NewExpense;
