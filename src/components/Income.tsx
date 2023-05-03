import { ChangeEvent, FormEvent, useContext, useState } from "react";

import { BalanceContext } from "../App";
import { IContext, IIncome } from "../types/alltypes";

const Income = () => {
  const { setTotalIncome } = useContext(BalanceContext) as IContext;

  const [income, setIncome] = useState<IIncome>({
    amount: "",
    date: "",
    source: "",
  });
  const [details, setDetails] = useState<IIncome[]>([]);

  let todayDate = new Date().toISOString().slice(0, 10);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIncome({
      ...income,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!income.amount || !income.date || !income.source) {
      alert("empty fields");
      return;
    }

    const allincome = [...details, income];

    setDetails(allincome);

    setTotalIncome((prev: number) => prev + Number(income.amount));

    setIncome({ amount: "", date: "", source: "" });
  };
  return (
    <section className="part">
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Income source</h2>
          <input
            type="text"
            value={income.source}
            onChange={handleChange}
            required
            name="source"
          />
        </div>
        <div>
          <h2>Amount of Income</h2>
          <input
            type="number"
            value={income.amount}
            onChange={handleChange}
            required
            name="amount"
          />
        </div>
        <div>
          <h2>Date of Income</h2>
          <input
            type="date"
            value={income.date}
            onChange={handleChange}
            required
            name="date"
            min={todayDate}
          />
        </div>
        <button aria-label="Add Income">Add Income</button>
      </form>
      <div className="result">
        {details.map((income) => {
          return (
            <li>
              {income.source}:{"  "} {income.amount}EUR on{" "}
              {new Date(income.date).toUTCString().slice(0, 4)}{" "}
              {new Date(income.date).toLocaleDateString("en-US", {
                dateStyle: "medium",
              })}
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default Income;
