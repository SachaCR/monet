import { MoneyAmountState } from ".";

export function getValue(state: MoneyAmountState): number {
  if (state.precision > 0) {
    return state.amount / Math.pow(10, state.precision);
  }

  return state.amount;
}
