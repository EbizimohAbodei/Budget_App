import React, { useContext, useState } from "react";

import { BalanceContext } from "../App";
import { IContext } from "../types/alltypes";

const Target = () => {
  const { target, setTarget, savings, setTotalIncome, setSavings } = useContext(
    BalanceContext
  ) as IContext;
  const [value, setValue] = useState(0);

  const handleSet = () => {
    setValue(Number(target));
  };

  const handleReset = () => {
    setTarget("0");
    setValue(0);
  };
  const handleWithdraw = () => {
    setTotalIncome((prev: number) => prev + savings);
    setSavings(0);
  };
  return (
    <div className="part">
      <div>
        <h2>Set Target</h2>
        <input
          type="number"
          required
          onChange={(event) => setTarget(event.target.value)}
          value={target}
        />

        <button aria-label="Set Target" onClick={handleSet}>
          Set target
        </button>
        <button aria-label="Reset Target" onClick={handleReset}>
          Reset
        </button>
      </div>

      <p>Current saving: {savings}</p>
      <p>Target: {value}</p>
      <p>Progress: {value > 0 ? ((savings / value) * 100).toFixed(2) : 0}%</p>

      <meter value={value > 0 ? savings / value : 0} />

      <button aria-label="Withdraw Savings" onClick={handleWithdraw}>
        Withdraw savings
      </button>
    </div>
  );
};

export default Target;
