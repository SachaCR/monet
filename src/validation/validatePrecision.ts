export function validatePrecision(precision: number) {
  if (!Number.isInteger(precision)) {
    throw new Error("FLOATING_PRECISION_ERROR");
  }

  if (precision < 0) {
    throw new Error("NEGATIVE_PRECISION_ERROR");
  }

  if (precision > 4) {
    throw new Error("OVER_MAX_PRECISION");
  }
}
