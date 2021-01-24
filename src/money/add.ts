import { Money, MoneyAmountState, money } from ".";
import { setPrecision } from "./setPrecision";
import { validateAmount } from "../validation/validateAmount";
import { validatePrecision } from "../validation/validatePrecision";

export function add(state: MoneyAmountState, moneyToAdd: Money): Money {
  if (state.currency !== moneyToAdd.getCurrency()) {
    throw new Error("CURRENCY_MISMATCH_ERROR");
  }

  let amount1 = state.amount;
  let amount2 = moneyToAdd.getAmount();
  const biggestPrecision = Math.max(state.precision, moneyToAdd.getPrecision());

  validatePrecision(biggestPrecision);

  if (state.precision !== moneyToAdd.getPrecision()) {
    amount1 = setPrecision(state, biggestPrecision).getAmount();
    amount2 = moneyToAdd.setPrecision(biggestPrecision).getAmount();
  }

  const newAmount = amount1 + amount2;

  validateAmount(newAmount);

  return money({
    amount: amount1 + amount2,
    precision: biggestPrecision,
    currency: state.currency,
  });
}
