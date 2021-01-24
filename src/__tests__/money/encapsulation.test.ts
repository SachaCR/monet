import { money, MoneyAmountState } from "../../";

describe("encapsulation", () => {
  test(`
    Given a Money object and his state parameter
    When I change his state object
    Then the internal Money object state should not change
  `, () => {
    const state: MoneyAmountState = {
      amount: 13,
      precision: 0,
      currency: "EUR",
    };

    const moneyAmount = money(state);

    expect(moneyAmount.getValue()).toStrictEqual(13);
    expect(moneyAmount.getPrecision()).toStrictEqual(0);
    expect(moneyAmount.getCurrency()).toStrictEqual("EUR");

    state.amount = 14;
    state.precision = 2;
    state.currency = "USD";

    expect(moneyAmount.getValue()).toStrictEqual(13);
    expect(moneyAmount.getPrecision()).toStrictEqual(0);
    expect(moneyAmount.getCurrency()).toStrictEqual("EUR");
  });
});
