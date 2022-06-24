import React, { useState } from "react";
import styled from "styled-components";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <Card bgColor="#3e3e3e" margin="10px">
      <StyledExpenseItemWrap>
        <div className="left">
          <h2 className="title">{title}</h2>
        </div>
        <div className="right">
          <ExpenseDate date={props.date} />
          <div className="price">${props.price}</div>
        </div>
      </StyledExpenseItemWrap>
    </Card>
  );
};

const StyledExpenseItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  &:first-child {margin-top: 0;}

  & .left {
    display: flex;
    align-items: center;
  }

  & .right {
    display: flex;
  }

  & .title,
  & .price {
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
  }
  & .price {
    background: rgb(137, 0, 192);
    padding: 5px 10px;
    height: 48px;
    border-radius: 10px;
    border: 3px solid #ffffff;
    border-radius: 10px;
    margin-left: 15px;
  }
`;

export default ExpenseItem;
