import { exchangeRate, ExchangeRateState } from "../../";

describe("encapsulation", () => {
  test(`
    Given a ExchangeRate object and his state parameter
    When I change his state object
    Then the internal ExchangeRate object state should not change
  `, () => {
    const state: ExchangeRateState = {
      fromCurrency: "EUR",
      toCurrency: "USD",
      rate: 1.123,
    };

    const moneyAmount = exchangeRate(state);

    expect(moneyAmount.getFromCurrency()).toStrictEqual("EUR");
    expect(moneyAmount.getToCurrency()).toStrictEqual("USD");
    expect(moneyAmount.getRate()).toStrictEqual(1.123);

    state.fromCurrency = "GBP";
    state.toCurrency = "EUR";
    state.rate = 1.3434;

    expect(moneyAmount.getFromCurrency()).toStrictEqual("EUR");
    expect(moneyAmount.getToCurrency()).toStrictEqual("USD");
    expect(moneyAmount.getRate()).toStrictEqual(1.123);
  });
});
