import React, { useState } from "react";
import styled from "styled-components";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <StyledExpenseItemWrap>
      <Card bgColor="#000000">
        <div className="title">
          <ExpenseDate date={props.date} />
          <h2 className="title">{title}</h2>
        </div>
        <div className="price">${props.price}</div>
      </Card>
    </StyledExpenseItemWrap>
  );
};

const StyledExpenseItemWrap = styled.div`
  transition: all 0.2s;
  display: flex;
  flex-direction: row;
  &:hover {
    transform: scale(0.99);
  }

  & .title {
    display: flex;
    align-items: center;
  }

  & .date {
    color: #c1c1c1;
    font-size: 12px;
    font-weight: 200;
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
    border-radius: 10px;
    border: 3px solid #ffffff;
    border-radius: 10px;
  }
`;

export default ExpenseItem;
