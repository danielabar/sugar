import Fraction from 'fractional';

const GRAMS_PER_TEASPOON = 4;

const toTeaspoons = (grams) => {
  const divide = grams / GRAMS_PER_TEASPOON;
  const whole = Math.floor(divide);
  const fraction = divide - Math.floor(divide);
  return { whole, fraction, divide };
}

const toFraction = (input) => {
  return new Fraction.Fraction(input).toString();
}

const generateMessage = (tsp) => {
  const displayTsp = toFraction(tsp);
  const indefiniteArticle = tsp < 1 ? 'a' : '';
  const noun = tsp <= 1 ? 'teaspoon' : 'teaspoons';
  const actualDisplayTsp = indefiniteArticle.length > 0 ? (' ' + displayTsp) : displayTsp;
  const exclaim = tsp > 2 ? '!' : '.';
  return `That's ${indefiniteArticle}${actualDisplayTsp} ${noun}${exclaim}`;
}

export {
  toTeaspoons,
  toFraction,
  generateMessage
};
