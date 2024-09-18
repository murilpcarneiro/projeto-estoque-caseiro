const inputEstoque = document.getElementById("inputEstoque");
const botao_novo_item = document.getElementById("botaoNovoItem");
const listaEstoque = document.getElementById("listaEstoque");

function addItem() {
  const itemText = inputEstoque.value.trim();

  if (itemText === "") {
    alert("Por favor, adicione um item!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = itemText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remover";
  removeBtn.classList.add("btn", "btn-danger");
  removeBtn.addEventListener("click", () => {
    listaEstoque.removeChild(li);
  });

  const qtdeItem = document.createElement("input");
  qtdeItem.classList.add("qtde");
  qtdeItem.setAttribute("type", "number");
  qtdeItem.setAttribute("value", "1");
  qtdeItem.setAttribute("min", "1");
  qtdeItem.setAttribute("max", "999");

  const tipoQtde = document.createElement("select");
  tipoQtde.id = "tiposMedida";
  tipoQtde.classList.add("tiposMedida");

  let option1 = document.createElement("option");
  option1.text = "Kg";
  let option2 = document.createElement("option");
  option2.text = "g";
  let option3 = document.createElement("option");
  option3.text = "L";
  let option4 = document.createElement("option");
  option4.text = "ml";
  let option5 = document.createElement("option");
  option5.text = "un";

  tipoQtde.add(option1);
  tipoQtde.add(option2);
  tipoQtde.add(option3);
  tipoQtde.add(option4);
  tipoQtde.add(option5);

  li.appendChild(qtdeItem);

  li.appendChild(tipoQtde);

  li.appendChild(removeBtn);

  listaEstoque.appendChild(li);

  inputEstoque.value = "";
}

botao_novo_item.addEventListener("click", addItem);

inputEstoque.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});