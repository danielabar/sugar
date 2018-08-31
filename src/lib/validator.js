const NUM_ONLY_REGEX = new RegExp(/^\d+$/);

function validateGrams(grams) {
  let result = {};
  if (!NUM_ONLY_REGEX.test(grams)) {
    result = {
      grams: { hasError: true, message: 'Please enter a number between 1 and 50'}
    }
  } else {
    const intGrams = parseInt(grams, 10);
    if (!Number.isInteger(intGrams) || intGrams < 1 || intGrams > 50) {
      result = {
        grams: { hasError: true, message: 'Please enter a number between 1 and 50'}
      }
    }
  }

  return result;
}

export {
  validateGrams
}
