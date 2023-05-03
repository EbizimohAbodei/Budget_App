import { createContext, useState } from "react";
import "./App.css";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Target from "./components/Target";
import ShowBal from "./components/ShowBal";
import { IContext } from "./types/alltypes";

export const BalanceContext = createContext<IContext | null>(null);
function App() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [target, setTarget] = useState("");
  const [savings, setSavings] = useState(0);
  return (
    <div className="App">
      <BalanceContext.Provider
        value={{
          totalIncome,
          setTotalIncome,
          target,
          setTarget,
          savings,
          setSavings,
        }}
      >
        <section className="top-main">
          <Income />
          <Expense />
          <Target />
        </section>

        <section>
          <ShowBal />
        </section>
      </BalanceContext.Provider>
    </div>
  );
}

export default App;
