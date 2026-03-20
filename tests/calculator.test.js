const calculator = require('../src/calculator');

describe('Calculator - Basic Operations', () => {
  // Add operation tests (5 tests)
  describe('add', () => {
    test('should return sum of two positive numbers when adding', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should return sum with negative number when adding negative', () => {
      expect(calculator.add(-1, 5)).toBe(4);
    });

    test('should return sum of two negative numbers when adding negatives', () => {
      expect(calculator.add(-3, -7)).toBe(-10);
    });

    test('should return positive number when adding zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should return sum of decimal numbers when adding decimals', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  // Subtract operation tests (5 tests)
  describe('subtract', () => {
    test('should return difference of two positive numbers when subtracting', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should return negative result when minuend is smaller', () => {
      expect(calculator.subtract(3, 7)).toBe(-4);
    });

    test('should return positive number when subtracting negative', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('should return same number when subtracting zero', () => {
      expect(calculator.subtract(8, 0)).toBe(8);
    });

    test('should return difference of decimal numbers when subtracting decimals', () => {
      expect(calculator.subtract(0.5, 0.3)).toBeCloseTo(0.2);
    });
  });

  // Multiply operation tests (5 tests)
  describe('multiply', () => {
    test('should return product of two positive numbers when multiplying', () => {
      expect(calculator.multiply(4, 5)).toBe(20);
    });

    test('should return negative product when one operand is negative', () => {
      expect(calculator.multiply(-3, 4)).toBe(-12);
    });

    test('should return positive product when both operands are negative', () => {
      expect(calculator.multiply(-2, -6)).toBe(12);
    });

    test('should return zero when multiplying by zero', () => {
      expect(calculator.multiply(7, 0)).toBe(0);
    });

    test('should return product of decimal numbers when multiplying decimals', () => {
      expect(calculator.multiply(0.2, 0.3)).toBeCloseTo(0.06);
    });
  });

  // Divide operation tests (5 tests)
  describe('divide', () => {
    test('should return quotient of two positive numbers when dividing', () => {
      expect(calculator.divide(15, 3)).toBe(5);
    });

    test('should return negative quotient when one operand is negative', () => {
      expect(calculator.divide(-12, 4)).toBe(-3);
    });

    test('should return positive quotient when both operands are negative', () => {
      expect(calculator.divide(-20, -4)).toBe(5);
    });

    test('should return decimal quotient when division is not exact', () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    test('should return zero when dividing zero by a number', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });
  });
});

describe('Calculator - Boundary Cases', () => {
  // Division by zero (2 tests)
  describe('division by zero', () => {
    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => calculator.divide(-5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  // Empty/null input (4 tests)
  describe('empty input', () => {
    test('should throw error when first operand is null for add', () => {
      expect(() => calculator.add(null, 5)).toThrow('Invalid operand');
    });

    test('should throw error when second operand is undefined for subtract', () => {
      expect(() => calculator.subtract(10, undefined)).toThrow('Invalid operand');
    });

    test('should throw error when both operands are missing for multiply', () => {
      expect(() => calculator.multiply()).toThrow('Invalid operand');
    });

    test('should throw error when operands are missing for divide', () => {
      expect(() => calculator.divide()).toThrow('Invalid operand');
    });
  });

  // Invalid input types (4 tests)
  describe('invalid input types', () => {
    test('should throw error when operand is string for add', () => {
      expect(() => calculator.add('5', 3)).toThrow('Operands must be numbers');
    });

    test('should throw error when operand is object for subtract', () => {
      expect(() => calculator.subtract({}, 2)).toThrow('Operands must be numbers');
    });

    test('should throw error when operand is array for multiply', () => {
      expect(() => calculator.multiply([1, 2], 3)).toThrow('Operands must be numbers');
    });

    test('should throw error when operand is boolean for divide', () => {
      expect(() => calculator.divide(true, 2)).toThrow('Operands must be numbers');
    });
  });

});
