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

  li.appendChild(qtdeItem);

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