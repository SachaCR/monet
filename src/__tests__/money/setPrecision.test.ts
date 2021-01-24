import { money } from "../../";

describe("setPrecision()", () => {
  test(`
    Given a Money object 1301 EUR precision 2
    When I set precision to 3
    Then it should return a new Money object with 13010 EUR precision 3
  `, () => {
    const moneyPrecision2 = money({
      amount: 1301,
      precision: 2,
      currency: "EUR",
    });

    const moneyPrecision3 = moneyPrecision2.setPrecision(3);

    expect(moneyPrecision3.getAmount()).toStrictEqual(13010);
    expect(moneyPrecision3.getValue()).toStrictEqual(13.01);
    expect(moneyPrecision3.getPrecision()).toStrictEqual(3);
    expect(moneyPrecision3.getCurrency()).toStrictEqual("EUR");
  });

  test(`
    Given a Money object 1301 EUR precision 2
    When I set precision to 1
    Then it should return a new Money object with 130 EUR precision 1
  `, () => {
    const moneyPrecision2 = money({
      amount: 1301,
      precision: 2,
      currency: "EUR",
    });

    const moneyPrecision1 = moneyPrecision2.setPrecision(1);

    expect(moneyPrecision1.getAmount()).toStrictEqual(130);
    expect(moneyPrecision1.getValue()).toStrictEqual(13.0);
    expect(moneyPrecision1.getPrecision()).toStrictEqual(1);
    expect(moneyPrecision1.getCurrency()).toStrictEqual("EUR");
  });
});
