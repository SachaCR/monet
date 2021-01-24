import { money } from "../../";

describe("remove()", () => {
  test(`
    Given a Money object 1301 EUR precision 2
    When I want to remove 502 EUR precision 2
    Then it should return a new Money object with  EUR precision 2 
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

    const moneyAmount3 = moneyAmount1.remove(moneyAmount2);

    expect(moneyAmount3.getAmount()).toStrictEqual(799);
    expect(moneyAmount3.getValue()).toStrictEqual(7.99);
    expect(moneyAmount3.getPrecision()).toStrictEqual(2);
    expect(moneyAmount3.getCurrency()).toStrictEqual("EUR");
  });

  test(`
    Given a Money object 1301 EUR precision 2
    When I want to remove 502 EUR precision 3
    Then it should return a new Money object EUR precision 3
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

    const resultMoney = moneyAmount1.remove(moneyAmount2);

    expect(resultMoney.getAmount()).toStrictEqual(12508);
    expect(resultMoney.getValue()).toStrictEqual(12.508);
    expect(resultMoney.getPrecision()).toStrictEqual(3);
    expect(resultMoney.getCurrency()).toStrictEqual("EUR");
  });

  test(`
    Given a Money object 1301 EUR precision 2
    When I want to remove 502 USD precision 2
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

    expect(() => moneyAmount1.remove(moneyAmount2)).toThrowError(
      "CURRENCY_MISMATCH_ERROR"
    );
  });

  test(`
    Given a Money object 1301 EUR precision 2
    When I want to remove 1400 EUR precision 2
    Then it should throw a 
  `, () => {
    const moneyAmount1 = money({
      amount: 1301,
      precision: 2,
      currency: "EUR",
    });

    const moneyAmount2 = money({
      amount: 1400,
      precision: 2,
      currency: "EUR",
    });

    expect(() => moneyAmount1.remove(moneyAmount2)).toThrowError(
      "NEGATIVE_AMOUNT_ERROR"
    );
  });
});
