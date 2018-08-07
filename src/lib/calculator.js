const GRAMS_PER_TEASPOON = 4;

const toTeaspoons = (input) => {
  const divide = input / GRAMS_PER_TEASPOON;
  const whole = Math.floor(divide);
  const fraction = divide - Math.floor(divide);
  return { whole, fraction };
}

export {
  toTeaspoons
};