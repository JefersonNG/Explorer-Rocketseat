/* 
  Capturar 2 numeros e fazer as operações matemáticas de soma, subtração, multiplicação, divisão .
  e para cada operaçao, mostrar um alerta com resultado
*/

let firstNumber = prompt("Digite primeiro numero: ");
let secundNumber = prompt("Digite segundo numero: ");

firstNumber = Number(firstNumber);
secundNumber = Number(secundNumber);

const soma = firstNumber + secundNumber;
const subt = firstNumber - secundNumber;
const mult = firstNumber * secundNumber;
const divi = firstNumber / secundNumber;
const restDivi = firstNumber % secundNumber;

alert("Soma é " + soma);
alert("Subtração é " + subt);
alert("Multiplicação é " + mult);
alert("Divisão é " + divi);
alert("Resto da divisão é " + restDivi);
