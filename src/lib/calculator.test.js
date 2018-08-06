import { toTeaspoons2 } from "./calculator";

describe('calculator', () => {
  describe('toTeaspoons2', () => {
    it('Calculates whole and fractional units', () => {
      // Given
      const input = 6;
      // When
      const result = toTeaspoons2(input);
      // Then
      expect(result.whole).toEqual(1);
      expect(result.fraction).toEqual(0.5);
    });
    it('Sets fractional to zero when evenly divisible', () => {
      // Given
      const input = 8;
      // When
      const result = toTeaspoons2(input);
      // Then
      expect(result.whole).toEqual(2);
      expect(result.fraction).toEqual(0);
    });
  });
});
