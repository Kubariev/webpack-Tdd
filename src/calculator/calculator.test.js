import calculator from './calculator';

describe('components.calculator', () => {
  describe('Test validation', () => {
    it('You may put values with no spaces', () => {
      expect(calculator.calculate('3+2')).toBe(5);
    });

    it('You may put values any spaces', () => {
      expect(calculator.calculate(' 3  +   2 ')).toBe(5);
    });

    it('Result returns NaN when incorrect string', () => {
      expect(calculator.calculate('2 + ')).toBeNaN();
      expect(calculator.calculate(' + 2')).toBeNaN();
      expect(calculator.calculate('text / text')).toBeNaN();
    });

    it('Result returns 0 when empty string', () => {
      expect(calculator.calculate('')).toBe(0);
    });

  });

  describe('Testing available methods', () => {
    it('Calc method', () => {
      expect(calculator.calculate).toEqual(jasmine.any(Function));
    });

    it('Add method', () => {
      expect(calculator.calculate('2 + 3')).toBe(5);
    });

    it('Substract method', () => {
      expect(calculator.calculate('3 - 2')).toBe(1);
    });

    it('Multiply method', () => {
      expect(calculator.calculate('2 * 3')).toBe(6);
    });

    it('Divide method', () => {
      expect(calculator.calculate('12 / 2')).toBe(6);
    });
  });
});
