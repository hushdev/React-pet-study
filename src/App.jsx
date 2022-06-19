import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "TV", date: new Date(2022, 3, 28), price: 22.2 },
    { title: "PS", date: new Date(2022, 3, 28), price: 21.2 },
    { title: "XBOX", date: new Date(2022, 3, 28), price: 27.2 },
    { title: "LAPTOP", date: new Date(2022, 3, 28), price: 24.2 },
    { title: "NEW PHONE", date: new Date(2022, 3, 28), price: 22.2 },
  ];

  const pushExpense = (data) => {
    console.log('From App.js');
    console.log(data);
  }

  return (
    <div className="container">
      <h2 className="h2">Expenses Manager App</h2>
      <NewExpense onSaveExpense={pushExpense}/>
      <Card className="card_dark">
        {expenses.map((item) => (
          <ExpenseItem
            title={item.title}
            date={item.date}
            price={item.price}
            key={item.title}
          />
        ))}
      </Card>
    </div>
  );
}

export default App;
