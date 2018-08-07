import { toTeaspoons, toFraction } from "./calculator";

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
});
