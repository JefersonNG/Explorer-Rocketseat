let qdItem = Number(prompt("Qual quantidade de item? "));
let itemName = [];
for (let item = 0; item < qdItem; item++) {
  itemName.push(prompt("Digite o item " + (item + 1)));
}
alert(itemName.toString().replace(",", ", "));
