import { money, Money, MoneyAmountState } from ".";
import { validatePrecision } from "../validation/validatePrecision";

export function setPrecision(
  state: MoneyAmountState,
  newPrecision: number
): Money {
  validatePrecision(newPrecision);

  const precisionDelta = state.precision - newPrecision;

  if (precisionDelta === 0) {
    return money({
      amount: state.amount,
      currency: state.currency,
      precision: newPrecision,
    });
  }

  let newAmount = state.amount;

  if (precisionDelta < 0) {
    newAmount = state.amount * Math.pow(10, Math.abs(precisionDelta));
  } else {
    newAmount = parseInt(
      (state.amount / Math.pow(10, precisionDelta)).toFixed(0)
    );
  }

  return money({
    amount: newAmount,
    currency: state.currency,
    precision: newPrecision,
  });
}
