import { Money, MoneyAmountState, money } from ".";
import { setPrecision } from "./setPrecision";

export function remove(state: MoneyAmountState, moneyToAdd: Money): Money {
  if (state.currency !== moneyToAdd.getCurrency()) {
    throw new Error("CURRENCY_MISMATCH_ERROR");
  }

  let amount1 = state.amount;
  let amount2 = moneyToAdd.getAmount();
  const biggestPrecision = Math.max(state.precision, moneyToAdd.getPrecision());

  if (state.precision !== moneyToAdd.getPrecision()) {
    amount1 = setPrecision(state, biggestPrecision).getAmount();
    amount2 = moneyToAdd.setPrecision(biggestPrecision).getAmount();
  }

  const newAmount = amount1 - amount2;

  if (newAmount < 0) {
    throw new Error("NEGATIVE_AMOUNT_ERROR");
  }

  return money({
    amount: newAmount,
    precision: biggestPrecision,
    currency: state.currency,
  });
}
