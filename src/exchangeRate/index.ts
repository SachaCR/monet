import { Currency, validateCurrency } from "../validation/validateCurrency";
import { validateRate } from "../validation/validateRate";

export interface ExchangeRate {
  getRate(): number;
  getFromCurrency(): Currency;
  getToCurrency(): Currency;
}

export interface ExchangeRateState {
  rate: number;
  fromCurrency: Currency;
  toCurrency: Currency;
}

export function exchangeRate(rate: ExchangeRateState): ExchangeRate {
  const state: ExchangeRateState = {
    fromCurrency: rate.fromCurrency,
    toCurrency: rate.toCurrency,
    rate: rate.rate,
  };

  validateCurrency(rate.fromCurrency);
  validateCurrency(rate.toCurrency);
  validateRate(rate.rate);

  return {
    getRate: () => state.rate,
    getFromCurrency: () => state.fromCurrency,
    getToCurrency: () => state.toCurrency,
  };
}
