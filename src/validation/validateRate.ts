export function validateRate(rate: number) {
  if (rate < 0) {
    throw new Error("NEGATIVE_RATE_ERROR");
  }

  if (rate > Number.MAX_SAFE_INTEGER) {
    throw new Error("OVER_MAX_SAFE_INTEGER_ERROR");
  }
}
