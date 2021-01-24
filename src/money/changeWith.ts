import { money, Money, MoneyAmountState } from ".";
import { ExchangeRate } from "../exchangeRate";
import { validateAmount } from "../validation/validateAmount";

export function changeWith(
  state: MoneyAmountState,
  exchangeRate: ExchangeRate
): Money {
  if (exchangeRate.getFromCurrency() !== state.currency) {
    throw new Error("CURRENCY_MISMATCH_ERROR");
  }

  const changedAmount = state.amount * exchangeRate.getRate();
  validateAmount(changedAmount);

  return money({
    amount: changedAmount,
    currency: exchangeRate.getToCurrency(),
    precision: state.precision,
  });
}
