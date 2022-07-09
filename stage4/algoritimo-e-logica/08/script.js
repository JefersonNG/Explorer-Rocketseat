const pacientes = [
  {
    name: "jeferson",
    age: 24,
    weigth: 78,
    height: 170,
  },
  {
    name: "mario",
    age: 20,
    weigth: 58,
    height: 160,
  },
  {
    name: "frederico",
    age: 29,
    weigth: 88,
    height: 180,
  },
];

const imcCalc = (pacient) => {
  const message = `
  Paciente ${pacient.name} possui o IMC de: ${
    Math.round(pacient.weigth / ((pacient.height / 100) ** 2))}`;

  return message;
}

for (let pacient of pacientes) {
  alert(imcCalc(pacient));
}
