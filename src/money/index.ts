import { add } from "./add";
import { changeWith } from "./changeWith";
import { getValue } from "./getValue";
import { getCurrency } from "./getCurrency";
import { remove } from "./remove";
import { setPrecision } from "./setPrecision";
import { validateAmount } from "../validation/validateAmount";
import { validatePrecision } from "../validation/validatePrecision";
import { Currency, validateCurrency } from "../validation/validateCurrency";
import { ExchangeRate } from "../exchangeRate";

export interface MoneyAmountState {
  amount: number;
  currency: Currency;
  precision: number;
}

export interface Money {
  getValue(): number;
  add(money: Money): Money;
  remove(money: Money): Money;
  getPrecision(): number;
  setPrecision(precision: number): Money;
  getAmount(): number;
  getCurrency(): Currency;
  changeWith(exchangeRate: ExchangeRate): Money;
  toString(): string;
}

export function money(moneyAmount: MoneyAmountState): Money {
  validateAmount(moneyAmount.amount);
  validatePrecision(moneyAmount.precision);
  validateCurrency(moneyAmount.currency);

  const state: MoneyAmountState = {
    amount: moneyAmount.amount,
    precision: moneyAmount.precision,
    currency: moneyAmount.currency,
  };

  return {
    getValue: () => getValue(state),
    getAmount: () => state.amount,

    getPrecision: () => state.precision,
    setPrecision: (precision: number) => setPrecision(state, precision),

    add: (money: Money) => add(state, money),
    remove: (money: Money) => remove(state, money),

    getCurrency: () => getCurrency(state),
    changeWith: (exchangeRate: ExchangeRate) => changeWith(state, exchangeRate),
    toString: () => {
      return `${getValue(state)} ${getCurrency(state)}`;
    },
  };
}
