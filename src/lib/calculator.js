import Fraction from 'fractional';

const GRAMS_PER_TEASPOON = 4;
const CALORIES_PER_GRAM_SUGAR = 4;
const WHO_PERCENTAGE_SUGAR_DAILY_CALORIES = 0.05;
const FEMALE_DAILY_CALORIES = 2000;
const MALE_DAILY_CALORIES = 2500;
const FEMALE_MAX_SUGAR_GRAMS = (FEMALE_DAILY_CALORIES * WHO_PERCENTAGE_SUGAR_DAILY_CALORIES) / CALORIES_PER_GRAM_SUGAR;
const MALE_MAX_SUGAR_GRAMS = (MALE_DAILY_CALORIES * WHO_PERCENTAGE_SUGAR_DAILY_CALORIES) / CALORIES_PER_GRAM_SUGAR;

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

/*
male 	2500 calories -> 5% -> 125 calories / 4 = 31.25g
woman 	2000 calories -> 5% -> 100 calories / 4 = 25g
eg: 25g = 100%
input 10g = 10/25 = 0.4 * 100 = 40%
*/
const percentageRecommended = (grams) => {
  return {
    female: grams / FEMALE_MAX_SUGAR_GRAMS,
    male: grams / MALE_MAX_SUGAR_GRAMS
  };
}

export {
  toTeaspoons,
  toFraction,
  generateMessage,
  percentageRecommended
};
