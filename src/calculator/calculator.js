import './calculator.scss';

const regExp = /^([\d.]+)\s*([\W]\*?)\s*([\d.]+)$/;

export default (function calculator() {
  const calcMethods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
  };

  const calculate = function(value) {
    const expression = value.trim().match(regExp);
    if (!value.trim()) return 0;
    if (!expression) return NaN;

    const value1 = +expression[1];
    const currentResult = calcMethods[expression[2]];
    const value2 = +expression[3];

    if (!value1 || !value2 || !currentResult) return NaN;

    return currentResult(value1, value2);
  };

  return {
    calculate,
  };
}());
