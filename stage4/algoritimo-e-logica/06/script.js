let number = prompt("Quero adivinhar numero entre 0 e: ");

let numSorteado = Math.round(Math.random() * number);
let user;
let cont = 0;

while (numSorteado != user) {
  cont++;
  user = prompt("Qual número eu pensei? ");
  user = Number(user);

  if (numSorteado === user && cont > 1) {
    alert(` Parabens!!! Acertou com ${cont} Tentativas`);
  } else if (numSorteado === user) {
    alert(` Parabens!!! Acertou com ${cont} Tentativa`);
  } else if (numSorteado > user) {
    alert("Errado, tente novamente! Dica: tente numero maior");
  } else if (numSorteado < user) {
    alert("Errado, tente novamente! Dica: tente numero menor");
  }
}
