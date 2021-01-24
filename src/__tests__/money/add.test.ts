import { money } from "../../";

describe("add()", () => {
  test(`
    Given a Money object 1301 EUR precision 2
    When I want to add 502 EUR precision 2
    Then it should return a new Money object with 1803 EUR precision 2 
  `, () => {
    const moneyAmount1 = money({
      amount: 1301,
      precision: 2,
      currency: "EUR",
    });

    const moneyAmount2 = money({
      amount: 502,
      precision: 2,
      currency: "EUR",
    });

    const moneyAmount3 = moneyAmount1.add(moneyAmount2);

    expect(moneyAmount3.getAmount()).toStrictEqual(1803);
    expect(moneyAmount3.getValue()).toStrictEqual(18.03);
    expect(moneyAmount3.getPrecision()).toStrictEqual(2);
    expect(moneyAmount3.getCurrency()).toStrictEqual("EUR");
  });

  test(`
    Given a Money object 1301 EUR precision 2
    When I want to add 502 EUR precision 3
    Then it should return a new Money object 13512EUR precision 3
  `, () => {
    const moneyAmount1 = money({
      amount: 1301,
      precision: 2,
      currency: "EUR",
    });

    const moneyAmount2 = money({
      amount: 502,
      precision: 3,
      currency: "EUR",
    });

    const resultMoney = moneyAmount1.add(moneyAmount2);

    expect(resultMoney.getAmount()).toStrictEqual(13512);
    expect(resultMoney.getValue()).toStrictEqual(13.512);
    expect(resultMoney.getPrecision()).toStrictEqual(3);
    expect(resultMoney.getCurrency()).toStrictEqual("EUR");
  });

  test(`
    Given a Money object 1301 EUR precision 2
    When I want to add 502 USD precision 2
    Then it should throw a CURRENCY_MISMATCH_ERROR 
  `, () => {
    const moneyAmount1 = money({
      amount: 1301,
      precision: 2,
      currency: "EUR",
    });

    const moneyAmount2 = money({
      amount: 502,
      precision: 2,
      currency: "USD",
    });

    expect(() => moneyAmount1.add(moneyAmount2)).toThrowError(
      "CURRENCY_MISMATCH_ERROR"
    );
  });
});
