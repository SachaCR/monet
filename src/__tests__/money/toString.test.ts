import { money } from "../../";

describe("toString()", () => {
  test(`
    Given 13 EUR precision 0
    When I call toString()
    Then it should return a string '13 EUR'
  `, () => {
    const moneyAmount = money({
      amount: 13,
      precision: 0,
      currency: "EUR",
    });

    expect(moneyAmount.toString()).toStrictEqual("13 EUR");
  });

  test(`
    Given 13 EUR precision 2
    When I call toString()
    Then it should return a string '0.13 EUR'
  `, () => {
    const moneyAmount = money({
      amount: 13,
      precision: 2,
      currency: "EUR",
    });

    expect(moneyAmount.toString()).toStrictEqual("0.13 EUR");
  });

  test(`
    Given 123131 EUR precision 2
    When I call toString()
    Then it should return a string '1231.31 EUR'
  `, () => {
    const moneyAmount = money({
      amount: 123131,
      precision: 2,
      currency: "EUR",
    });

    expect(moneyAmount.toString()).toStrictEqual("1231.31 EUR");
  });
});
