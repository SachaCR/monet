import { money, exchangeRate } from "../../";

describe("changeWith()", () => {
  test(`
    Given a Money object 1300 EUR precision 2
    And an ExchangeRate EUR to USD = 1.22 
    When I want to change
    Then it should return a new Money object with 1586 EUR precision 2
  `, () => {
    const eurToUsdRate = exchangeRate({
      fromCurrency: "EUR",
      toCurrency: "USD",
      rate: 1.22,
    });

    const euros = money({
      amount: 1300,
      precision: 2,
      currency: "EUR",
    });

    const dollars = euros.changeWith(eurToUsdRate);

    expect(euros.getAmount()).toStrictEqual(1300);
    expect(euros.getValue()).toStrictEqual(13.0);
    expect(euros.getPrecision()).toStrictEqual(2);
    expect(euros.getCurrency()).toStrictEqual("EUR");

    expect(dollars.getAmount()).toStrictEqual(1586);
    expect(dollars.getValue()).toStrictEqual(15.86);
    expect(dollars.getPrecision()).toStrictEqual(2);
    expect(dollars.getCurrency()).toStrictEqual("USD");
  });

  test(`
    Given a Money object 50 EUR precision 2
    And an ExchangeRate EUR to USD = 1.22 
    When I want to change
    Then it should return a new Money object with 61 EUR precision 2 
  `, () => {
    const eurToUsdRate = exchangeRate({
      fromCurrency: "EUR",
      toCurrency: "USD",
      rate: 1.22,
    });

    const euros = money({
      amount: 50,
      precision: 2,
      currency: "EUR",
    });

    const dollars = euros.changeWith(eurToUsdRate);

    expect(dollars.getAmount()).toStrictEqual(61);
    expect(dollars.getValue()).toStrictEqual(0.61);
    expect(dollars.getPrecision()).toStrictEqual(2);
    expect(dollars.getCurrency()).toStrictEqual("USD");
  });

  test(`
    Given a Money object 50 EUR precision 2
    And an ExchangeRate GBP to USD = 1.22 
    When I want to change
    Then it should throw a 
  `, () => {
    const eurToUsdRate = exchangeRate({
      fromCurrency: "GBP",
      toCurrency: "USD",
      rate: 1.22,
    });

    const euros = money({
      amount: 50,
      precision: 2,
      currency: "EUR",
    });

    expect(() => euros.changeWith(eurToUsdRate)).toThrowError(
      "CURRENCY_MISMATCH_ERROR"
    );
  });
});
