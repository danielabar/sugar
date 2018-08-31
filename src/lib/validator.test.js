import { validateGrams } from './validator';

describe('validateGrams', () => {
  it('Marks whole number as valid', () => {
    // Given
    const grams = '5';
    // When
    const result = validateGrams(grams);
    // expect
    expect(result).toEqual({});
  });

  it('Marks letters as invalid', () => {
    // Given
    const grams = 'abc';
    // When
    const result = validateGrams(grams);
    // expect
    expect(result.grams.hasError).toBe(true);
  });

  it('Marks decimals as invalid', () => {
    // Given
    const grams = '1.2';
    // When
    const result = validateGrams(grams);
    // expect
    expect(result.grams.hasError).toBe(true);
  });

  it('Marks combination of numbers and characters as invalid', () => {
    // Given
    const grams = '1,2';
    // When
    const result = validateGrams(grams);
    // expect
    expect(result.grams.hasError).toBe(true);
  });
});
