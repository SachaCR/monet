import { exchangeRate } from "../../";

describe("exchangeRate()", () => {
  test(`
    Given an exchange rate from EUR to USD with rate 1.123
    When I call exchangeRate()
    Then it should return an ExchangeRate
  `, () => {
    const rate = exchangeRate({
      fromCurrency: "EUR",
      toCurrency: "USD",
      rate: 1.123,
    });

    expect(rate.getFromCurrency()).toStrictEqual("EUR");
    expect(rate.getToCurrency()).toStrictEqual("USD");
    expect(rate.getRate()).toStrictEqual(1.123);
  });

  test(`
    Given an exchange rate from EUR to USD with rate -1.123
    When I call exchangeRate()
    Then it should throw an NEGATIVE_RATE_ERROR
  `, () => {
    expect(() => {
      exchangeRate({
        fromCurrency: "EUR",
        toCurrency: "USD",
        rate: -1.123,
      });
    }).toThrowError("NEGATIVE_RATE_ERROR");
  });

  test(`
    Given an exchange rate from EUR to USD with rate -1.123
    When I call exchangeRate()
    Then it should throw an NEGATIVE_RATE_ERROR
  `, () => {
    expect(() => {
      exchangeRate({
        fromCurrency: "EUR",
        toCurrency: "USD",
        rate: Number.MAX_SAFE_INTEGER + 1,
      });
    }).toThrowError("OVER_MAX_SAFE_INTEGER_ERROR");
  });
});
