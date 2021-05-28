import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart.js";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const items = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={items} />
      <ExpensesList items={items} />
    </Card>
  );
};

export default Expenses;
