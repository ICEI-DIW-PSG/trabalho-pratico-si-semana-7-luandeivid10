const carros = [
  {
    "id": 1,
    "nome": "Speedster X",
    "descricao": "Motor V8 500cv, performance máxima.",
    "detalhes": "O Speedster X é equipado com um motor V8 de 500cv, tração integral e câmbio automático de 7 marchas. Ideal para quem busca desempenho e emoção.",
    "imagem": "Porsche-1.jpg"
  },
  {
    "id": 2,
    "nome": "Urban SUV",
    "descricao": "Conforto e robustez para viagens.",
    "detalhes": "O Urban SUV combina tecnologia e segurança, com espaço interno amplo, motor turbo eficiente e sistema de entretenimento de última geração.",
    "imagem": "urban.jpg"
  },
  {
    "id": 3,
    "nome": "EcoDrive",
    "descricao": "100% elétrico, autonomia de 600km.",
    "detalhes": "O EcoDrive é o futuro da mobilidade. Sustentável, com recarga rápida e autonomia de até 600 km, além de tecnologia de direção semiautônoma.",
    "imagem": "eco.jpg"
  }
];

function carregarCarros() {
  const container = document.getElementById("lista-carros");
  container.innerHTML = "";

  carros.forEach(carro => {
    container.innerHTML += `
      <div class="col-sm-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <img src="${carro.imagem}" class="card-img-top" alt="${carro.nome}" style="height:200px; object-fit:cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${carro.nome}</h5>
            <p class="card-text">${carro.descricao}</p>
            <a href="detalhes.html?id=${carro.id}" class="mt-auto btn btn-primary">Ver detalhes</a>
          </div>
        </div>
      </div>
    `;
  });
}


function carregarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const carro = carros.find(c => c.id == id);

  if (carro) {
    document.getElementById("detalhesCarro").innerHTML = `
      <div class="card shadow-sm">
        <img src="${carro.imagem}" class="card-img-top" style="height:300px; object-fit:cover;">
        <div class="card-body">
          <h3 class="card-title">${carro.nome}</h3>
          <p class="text-muted">${carro.descricao}</p>
          <p>${carro.detalhes}</p>
          <a href="index.html" class="btn btn-dark">Voltar</a>
        </div>
      </div>
    `;
  } else {
    document.getElementById("detalhesCarro").innerHTML = "<p>Carro não encontrado.</p>";
  }
}