import React, { useState } from "react";
import styled from "styled-components";

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
    const data = { title, price: Number(amount), date: new Date(date) };
    props.onSaveExpense(data);
    props.onCancel();
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <div className="controls">
        <div className="control">
          <label>Title</label>
          <input type="text" value={title} onChange={onTitleChange} />
        </div>
        <div className="control">
          <label>$ amount</label>
          <input
            type="number"
            value={amount}
            onChange={onAmountChange}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={onDateChange}
            min="2018-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="btns">
        <button className="btn">Add</button>
        <button onClick={props.onCancel} className="btn btn-primary">
          Cancel
        </button>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  & .controls {
    max-width: 200px;
    width: 100%;
    display: flex;
    margin-bottom: 20px;
  }
  & .control {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    label {
      color: #6c6c6c;
      font-size: 12px;
      margin-bottom: 5px;
    }
    input {
      border: 0;
      border-radius: 10px;
      padding: 10px;
      background: #ffffff;
      box-shadow: 0 0 3px #646464;
      outline: 0;
    }
  }
  & .btns {
    display: flex;
  }
`;

export default ExpenseForm;
