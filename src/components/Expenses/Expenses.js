import React, { useState } from "react";

import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filterdYear, setFilterdYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filterdExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
