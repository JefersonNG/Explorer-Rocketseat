alert("Sistema escolar");
let student = prompt("Qual nome do aluno: ");
let nota1 = prompt("Qual primeira nota: ");
let nota2 = prompt("Qual segunda nota: ");
let nota3 = prompt("Qual terceira nota: ");

let average = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
average = average.toFixed(2);

const result = average > 6;

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de : " + average);
} else if (average < 3) {
  alert(student + "Você foi reprovado!!");
} else {
  alert(student + ", estude mais!!! sua media foi de: " + average);
}
