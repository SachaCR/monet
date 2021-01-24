import { money } from "../../";

describe("getValue()", () => {
  test(`
    Given a money object 1302 EUR precision 2
    When I call getValue() 
    Then it should return 13.02
  `, () => {
    const moneyAmount = money({
      amount: 1302,
      precision: 2,
      currency: "EUR",
    });

    expect(moneyAmount.getValue()).toStrictEqual(13.02);
    expect(moneyAmount.getPrecision()).toStrictEqual(2);
    expect(moneyAmount.getCurrency()).toStrictEqual("EUR");
  });

  test(`
    Given a money object 1302 EUR precision 0
    When I call getValue() 
    Then it should return 1302
  `, () => {
    const moneyAmount = money({
      amount: 1302,
      precision: 0,
      currency: "EUR",
    });

    expect(moneyAmount.getValue()).toStrictEqual(1302);
    expect(moneyAmount.getPrecision()).toStrictEqual(0);
    expect(moneyAmount.getCurrency()).toStrictEqual("EUR");
  });
});
