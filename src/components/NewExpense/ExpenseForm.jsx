import React, { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { title, amount, date: new Date(date) };
    props.onSaveExpense(data);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form-controls">
        <div className="form-control">
          <label>Title</label>
          <input type="text" value={title} onChange={onTitleChange} />
        </div>
        <div className="form-control">
          <label>$ amount</label>
          <input
            type="number"
            value={amount}
            onChange={onAmountChange}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={onDateChange}
            min="2022-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <button className="form-btn">Add expense</button>
    </form>
  );
};

export default ExpenseForm;
