// let numberOne = Number(prompt("Digite um numero: "));
// let numberTwo = Number(prompt("Digite outro numero: "));

// let soma = numberOne + numberTwo

// alert(`A soma entre ${numberOne} e ${numberTwo} é ${soma}`);
// alert(`A subtração ${numberOne} menos ${numberTwo} é ${numberOne - numberTwo}`);
// alert(
//   `A multiplicação ${numberOne} vezes ${numberTwo} é ${numberOne * numberTwo}`
// );
// alert(
//   `A divisão ${numberOne} dividido por ${numberTwo} é ${numberOne / numberTwo}`
// );
// alert(
//   `O resto da divisão entre ${numberOne} e ${numberTwo} é ${numberOne % numberTwo}`
// );


// if ( soma % 2 === 0) {
//   alert(`A soma dos numeros ${numberOne} e ${numberTwo} é um numero PAR!`)
// }else {
//   alert(`A soma dos numeros ${numberOne} e ${numberTwo} é um numero IMPAR!`)
// }

// if (numberOne === numberTwo) {
//   alert(`O numero ${numberOne} é igual ao numero ${numberTwo}`)
// }else {
//   alert(`O numero ${numberOne} é Diferente do numero ${numberTwo}`)
// }

const students = [
  {
    name: 'jeferson',
    gradFirstTest: 8,
    gradSecondTest: 7
  },
  {
    name: 'joao',
    gradFirstTest: 7,
    gradSecondTest: 4
  },
  {
    name: 'maria',
    gradFirstTest: 9,
    gradSecondTest: 8
  },
  {
    name: 'frederico',
    gradFirstTest: 6,
    gradSecondTest: 3
  },
  {
    name: 'mario',
    gradFirstTest: 5,
    gradSecondTest: 8
  }
]

function calc(student) {
  return (student.gradFirstTest + student.gradSecondTest) / 2
}

for (let student of students) {
  let average = calc(student)
  
  if (average >= 7){
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns, ${student.name}! Você foi APROVADO no concurso!
    `)
  } else {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi desta vez, ${student.name}!! Tente novamente!
    `)
  }
}