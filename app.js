let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value;

  if (nome === "") {
    alert("Por favor, insira um nome do amigo.");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    let item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  let listaResultado = document.getElementById("lista");

  if (amigos.length < 2) {
    alert("insira pelo menos dois nomes para sortear.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];

  listaResultado.innerHTML = `<li> ${amigoSorteado} foi sorteado!</li>`;

  setTimeout(function () {
    listaResultado.innerHTML = "";
  }, 5000);
}
