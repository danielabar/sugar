const GRAMS_PER_TEASPOON = 4;

const toTeaspoons = (input) => {
  // TODO deal with fractional units
  return Math.round(input / GRAMS_PER_TEASPOON);
}

export {
  toTeaspoons
};