export function validateAmount(amount: number) {
  if (!Number.isInteger(amount)) {
    throw new Error("FLOATING_AMOUNT_ERROR");
  }

  if (amount < 0) {
    throw new Error("NEGATIVE_AMOUNT_ERROR");
  }

  if (amount > Number.MAX_SAFE_INTEGER) {
    throw new Error("OVER_MAX_SAFE_INTEGER_ERROR");
  }
}
