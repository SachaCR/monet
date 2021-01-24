import { money } from "../../";

describe("money()", () => {
  test(`
    Given 13 EUR precision 0
    When I call money()
    Then it should return a Money object of 13 EUR precision 0 with no errors
  `, () => {
    const moneyAmount = money({
      amount: 13,
      precision: 0,
      currency: "EUR",
    });

    expect(moneyAmount.getValue()).toStrictEqual(13);
    expect(moneyAmount.getPrecision()).toStrictEqual(0);
    expect(moneyAmount.getCurrency()).toStrictEqual("EUR");
  });

  test(`
    Given 13.1 EUR precision 0
    When I call money()
    Then it should throw a FLOATING_AMOUNT_ERROR
  `, () => {
    expect(() =>
      money({
        amount: 13.1,
        precision: 0,
        currency: "EUR",
      })
    ).toThrowError("FLOATING_AMOUNT_ERROR");
  });

  test(`
    Given -13 EUR precision 0
    When I call money()
    Then it should throw a NEGATIVE_AMOUNT_ERROR
  `, () => {
    expect(() =>
      money({
        amount: -13,
        precision: 0,
        currency: "EUR",
      })
    ).toThrowError("NEGATIVE_AMOUNT_ERROR");
  });

  test(`
    Given 13 EUR precision -2
    When I call money()
    Then it should throw a NEGATIVE_PRECISION_ERROR
  `, () => {
    expect(() =>
      money({
        amount: 13,
        precision: -2,
        currency: "EUR",
      })
    ).toThrowError("NEGATIVE_PRECISION_ERROR");
  });

  test(`
    Given 13 EUR precision 2.01
    When I call money()
    Then it should throw a FLOATING_PRECISION_ERROR
  `, () => {
    expect(() =>
      money({
        amount: 13,
        precision: 2.01,
        currency: "EUR",
      })
    ).toThrowError("FLOATING_PRECISION_ERROR");
  });

  test(`
    Given 1301 INVALID_CURRENCY precision 2
    When I call money()
    Then it should throw a INVALID_CURRENCY_ERROR
  `, () => {
    expect(() =>
      money({
        amount: 1301,
        precision: 2,
        //@ts-expect-error
        currency: "INVALID_CURRENCY",
      })
    ).toThrowError("INVALID_CURRENCY_ERROR");
  });

  test(`
    Given MAX_SAFE_INTEGER + 1 EUR precision 2
    When I call money()
    Then it should throw a OVER_MAX_SAFE_INTEGER_ERROR
  `, () => {
    expect(() =>
      money({
        amount: Number.MAX_SAFE_INTEGER + 1,
        precision: 2,
        currency: "EUR",
      })
    ).toThrowError("OVER_MAX_SAFE_INTEGER_ERROR");
  });

  test(`
    Given 13 EUR precision Number.MAX_SAFE_INTEGER + 1,
    When I call money()
    Then it should throw a OVER_MAX_SAFE_INTEGER_ERROR
  `, () => {
    expect(() =>
      money({
        amount: 13,
        precision: Number.MAX_SAFE_INTEGER + 1,
        currency: "EUR",
      })
    ).toThrowError("OVER_MAX_PRECISION");
  });
});
