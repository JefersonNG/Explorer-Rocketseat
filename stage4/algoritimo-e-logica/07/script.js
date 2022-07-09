const itens = [];
let exit = false;

while (!exit) {
  let option = Number(
    prompt(`
    Digite a opção desejada
1. Cadastrar item
2. Mostrar lista
3. Sair`)
  );

  // if (option === 1) {
  //   let cadastro = prompt("Produto: ");
  //   itens.push(cadastro);
  // } else if (option === 2) {
  //   if (itens.length < 1) {
  //     alert("Não existem itens cadastrados");
  //   } else {
  //     alert(itens);
  //   }
  // } else if (option === 3) {
  //   exit = true;
  // } else {
  //   alert("Opção invalida");
  // }

  switch (option) {
    case 1:
      let cadastro = prompt("Produto: ");
      itens.push(cadastro);
      break;
    case 2:
      if (itens.length < 1) {
        alert("Não existem itens cadastrados");
      } else {
        alert(itens);
      }
      break;
    case 3:
      exit = true;
      break;
    default:
      alert("Opção invalida");
      break;
  }
}
