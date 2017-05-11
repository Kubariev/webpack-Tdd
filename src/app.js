import calc from './calculator/calculator';

const calcWrap = document.querySelector('.calculator');
const calcResult = document.querySelector('.calculator-result');
const calcInput = document.querySelector('.calculator-input');

calcWrap.addEventListener('submit', function(e) {
  e.preventDefault();
  calcResult.innerHTML = calc.calculate(calcInput.value);
});
