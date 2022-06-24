import React from "react";
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
    <Card bgColor="#2d2d2d" className="new-expense">
      <ExpenseForm onSaveExpense={saveExpense} onCancel={props.onCancel}/>
    </Card>
  );
};

export default NewExpense;
