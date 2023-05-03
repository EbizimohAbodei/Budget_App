export interface IIncome {
  amount: string;
  date: string;
  source: string;
}

export interface IContext {
  totalIncome: number;
    setTotalIncome: Function;
    target: string,
    setTarget: Function;
    savings: number,
    setSavings: Function;
}