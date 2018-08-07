import { toTeaspoons, toFraction, generateMessage } from "./calculator";

describe('calculator', () => {
  describe('toTeaspoons', () => {
    it('Calculates whole and fractional units', () => {
      // Given
      const input = 6;
      // When
      const result = toTeaspoons(input);
      // Then
      expect(result.whole).toEqual(1);
      expect(result.fraction).toEqual(0.5);
      expect(result.divide).toEqual(1.5);
    });

    it('Sets fractional to zero when evenly divisible', () => {
      // Given
      const input = 8;
      // When
      const result = toTeaspoons(input);
      // Then
      expect(result.whole).toEqual(2);
      expect(result.fraction).toEqual(0);
      expect(result.divide).toEqual(2);
    });
  });

  describe('toFraction', () => {
    it('Converts decimal to fractional string', () => {
      // Given
      const input = 1.75;
      // When
      const result = toFraction(input);
      expect(result).toEqual('1 3/4');
    });
  });

  describe('generateMessage', () => {
    it('Displays fraction with indefinite article and ends in period when tsp is less than 1', () => {
      // Given
      const tsp = 0.75;
      // When
      const result = generateMessage(tsp);
      // Then
      expect(result).toEqual('That\'s a 3/4 teaspoon.');
    });

    it('Displays whole number and ends in period when tsp is 1', () => {
      // Given
      const tsp = 1;
      // When
      const result = generateMessage(tsp);
      // Then
      expect(result).toEqual('That\'s 1 teaspoon.');
    });

    it('Displays whole number, plural form and ends in period when tsp is 2', () => {
      // Given
      const tsp = 2;
      // When
      const result = generateMessage(tsp);
      // Then
      expect(result).toEqual('That\'s 2 teaspoons.');
    });

    it('Displays whole number, plural form and ends in exclamation when tsp is greater than 2', () => {
      // Given
      const tsp = 3;
      // When
      const result = generateMessage(tsp);
      // Then
      expect(result).toEqual('That\'s 3 teaspoons!');
    });

    it('Displays whole number and fraction, plural form and ends in period when tsp is between 1 and 2', () => {
      // Given
      const tsp = 1.25;
      // When
      const result = generateMessage(tsp);
      // Then
      expect(result).toEqual('That\'s 1 1/4 teaspoons.');
    });

    it('Displays whole number and fraction, plural form and ends in exclamation when tsp is greater than 2', () => {
      // Given
      const tsp = 2.5;
      // When
      const result = generateMessage(tsp);
      // Then
      expect(result).toEqual('That\'s 2 1/2 teaspoons!');
    });
  });
});
