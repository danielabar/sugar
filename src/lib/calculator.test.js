import { toTeaspoons2 } from "./calculator";

describe('calculator', () => {
  describe('toTeaspoons2', () => {
    it('Calculates whole and fractional unites', () => {
      // Given
      const input = 6;
      // When
      const result = toTeaspoons2(input);
      // Then
      expect(result.whole).toEqual(1);
      expect(result.fraction).toEqual(0.5);
    });
  });
});
