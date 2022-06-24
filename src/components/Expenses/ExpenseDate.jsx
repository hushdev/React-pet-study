import React from "react";
import styled from "styled-components";

const ExpenseDate = (props) => {
  // Date props
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <StyledExpenseDateWrap>
      {month} {day}, {year}
    </StyledExpenseDateWrap>
  );
};

const StyledExpenseDateWrap = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-self: flex-end;
`;

export default ExpenseDate;
