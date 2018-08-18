import { toPercentage } from './formatter';

describe('formatter', () => {
  describe('toPercentage', () => {
    it('Formats decimal < 1 to string percentage', () => {
      // Given
      const input = 0.25;
      // When
      const result = toPercentage(input);
      // Then
      expect(result).toEqual("25%");
    });
    it('Formats 1 to 100%', () => {
      // Given
      const input = 1;
      // When
      const result = toPercentage(input);
      // Then
      expect(result).toEqual("100%");
    });
    it('Formats > 1 to over 100%', () => {
      // Given
      const input = 1.32;
      // When
      const result = toPercentage(input);
      // Then
      expect(result).toEqual("132%");
    });
    it('Rounds and truncates decimals', () => {
      // Given
      const input = 1.088;
      // When
      const result = toPercentage(input);
      // Then
      expect(result).toEqual("109%");
    })
  });
});
