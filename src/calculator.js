/**
 * @fileoverview A simple calculator module providing basic arithmetic operations.
 * All operations include input validation and error handling.
 * @module calculator
 */

/**
 * Error messages used throughout the calculator module.
 * @constant {Object}
 */
const ERROR_MESSAGES = {
  INVALID_OPERAND: 'Invalid operand',
  NON_NUMBER_OPERAND: 'Operands must be numbers',
  DIVISION_BY_ZERO: 'Division by zero is not allowed'
};

/**
 * Checks if a value is null or undefined.
 * @param {*} value - The value to check
 * @returns {boolean} True if the value is null or undefined
 */
const isNullOrUndefined = (value) => value === null || value === undefined;

/**
 * Validates that a single operand is a valid number.
 * @param {*} operand - The operand to validate
 * @throws {Error} If operand is null or undefined
 * @throws {Error} If operand is not a number
 */
const validateSingleOperand = (operand) => {
  if (isNullOrUndefined(operand)) {
    throw new Error(ERROR_MESSAGES.INVALID_OPERAND);
  }
  if (typeof operand !== 'number') {
    throw new Error(ERROR_MESSAGES.NON_NUMBER_OPERAND);
  }
};

/**
 * Validates that both operands are valid numbers.
 * @param {*} a - The first operand
 * @param {*} b - The second operand
 * @throws {Error} If any operand is null or undefined
 * @throws {Error} If any operand is not a number
 */
const validateOperands = (a, b) => {
  validateSingleOperand(a);
  validateSingleOperand(b);
};

/**
 * Validates that the divisor is not zero.
 * @param {number} divisor - The divisor to validate
 * @throws {Error} If divisor is zero
 */
const validateNonZeroDivisor = (divisor) => {
  if (divisor === 0) {
    throw new Error(ERROR_MESSAGES.DIVISION_BY_ZERO);
  }
};

/**
 * Adds two numbers.
 * @param {number} a - The first addend
 * @param {number} b - The second addend
 * @returns {number} The sum of a and b
 * @throws {Error} If operands are invalid
 * @example
 * add(2, 3); // returns 5
 * add(-1, 1); // returns 0
 */
const add = (a, b) => {
  validateOperands(a, b);
  return a + b;
};

/**
 * Subtracts the second number from the first.
 * @param {number} a - The minuend
 * @param {number} b - The subtrahend
 * @returns {number} The difference of a and b
 * @throws {Error} If operands are invalid
 * @example
 * subtract(5, 3); // returns 2
 * subtract(1, 1); // returns 0
 */
const subtract = (a, b) => {
  validateOperands(a, b);
  return a - b;
};

/**
 * Multiplies two numbers.
 * @param {number} a - The multiplicand
 * @param {number} b - The multiplier
 * @returns {number} The product of a and b
 * @throws {Error} If operands are invalid
 * @example
 * multiply(2, 3); // returns 6
 * multiply(-2, 3); // returns -6
 */
const multiply = (a, b) => {
  validateOperands(a, b);
  return a * b;
};

/**
 * Divides the first number by the second.
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The quotient of a and b
 * @throws {Error} If operands are invalid
 * @throws {Error} If divisor is zero
 * @example
 * divide(6, 2); // returns 3
 * divide(5, 2); // returns 2.5
 */
const divide = (a, b) => {
  validateOperands(a, b);
  validateNonZeroDivisor(b);
  return a / b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
