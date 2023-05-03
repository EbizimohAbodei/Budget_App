import { useContext, useState } from "react";

import { BalanceContext } from "../App";
import { IContext } from "../types/alltypes";
const ShowBal = () => {
  const { setTotalIncome, totalIncome, savings, setSavings, target } =
    useContext(BalanceContext) as IContext;

  const [value, setValue] = useState("");

  const handleClick = () => {
    if (totalIncome < Number(value) || totalIncome < 1) {
      alert("insufficient funds");
      return;
    }

    if (savings === Number(target) || savings > Number(target)) {
      alert("maximu target reached ");
      return;
    }

    setTotalIncome((prev: number) => prev - Number(value));
    setSavings((prev: number) => prev + Number(value));
  };

  return (
    <div>
      <p>Current Balance: {totalIncome}</p>

      <div>
        <p>Transfer to Saving account</p>
        <input
          type="number"
          className="transfer"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />{" "}
        <button onClick={handleClick}>Transfer</button>
      </div>
    </div>
  );
};

export default ShowBal;
