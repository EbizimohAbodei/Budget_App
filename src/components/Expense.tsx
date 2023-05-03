import React, { ChangeEvent, FormEvent, useContext, useState } from "react";

import { IContext, IIncome } from "../types/alltypes";
import { BalanceContext } from "../App";

const Expense = () => {
  const [expense, setExpense] = useState<IIncome>({
    amount: "",
    date: "",
    source: "",
  });
  const { setTotalIncome, totalIncome } = useContext(
    BalanceContext
  ) as IContext;
  const [details, setDetails] = useState<IIncome[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExpense({
      ...expense,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!expense.amount || !expense.date || !expense.source) {
      alert("empty fields");
      return;
    }
    if (Number(expense.amount) > totalIncome) {
      alert("insufficient balance");
      return;
    }

    const allincome = [...details, expense];

    setDetails(allincome);

    setTotalIncome((prev: number) => prev - Number(expense.amount));

    setExpense({ amount: "", date: "", source: "" });
  };
  return (
    <section className="part">
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Expense source</h2>
          <input
            type="text"
            placeholder="Electricity Bill"
            value={expense.source}
            name="source"
            onChange={handleChange}
          />
        </div>
        <div>
          <h2>Amount of expense</h2>
          <input
            type="number"
            value={expense.amount}
            name="amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <h2>Date of expense</h2>
          <input
            type="date"
            value={expense.date}
            name="date"
            onChange={handleChange}
          />
        </div>
        <button aria-label="Add Expense">Add Expense</button>
      </form>

      <div className="result">
        {details.map((expense) => {
          return (
            <li>
              {expense.source}:{"  "} {expense.amount} EUR on{" "}
              {new Date(expense.date).toUTCString().slice(0, 4)}{" "}
              {new Date(expense.date).toLocaleDateString("en-US", {
                dateStyle: "medium",
              })}
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default Expense;
