const epis = [
    { numero: 1, nome: "Papel", imagem: "img/1.png" },
    { numero: 2, nome: "Plastico", imagem: "img/2.png" },
    { numero: 3, nome: "Organico", imagem: "img/3.png" },
    { numero: 4, nome: "Vidro", imagem: "img/4.png" },
    { numero: 5, nome: "Metal", imagem: "img/5.png" },
    { numero: 6, nome: "Varredura", imagem: "img/6.png" },
    { numero: 7, nome: "Residuos Perigosos", imagem: "img/7.png" },
    { numero: 8, nome: "Rejeito", imagem: "img/8.png" },
    { numero: 9, nome: "ETE", imagem: "img/9.png" },
    { numero: 10, nome: "Aluminio", imagem: "img/10.png" },
    { numero: 11, nome: "Oleo usado", imagem: "img/11.png" }, 
    { numero: 12, nome: "Solo", imagem: "img/12.png" },
    { numero: 13, nome: "Cinzas", imagem: "img/13.png" },
    { numero: 14, nome: "Agua", imagem: "img/14.png" },
    { numero: 15, nome: "Rios", imagem: "img/15.png" },
    { numero: 16, nome: "Chuva", imagem: "img/16.png" },
    { numero: 17, nome: "Arvores", imagem: "img/17.png" },
    { numero: 18, nome: "Semente", imagem: "img/18.png" },
    { numero: 19, nome: "Oleo Lubrificante usado", imagem: "img/19.png" },
    { numero: 20, nome: "Raizes", imagem: "img/20.png" },
    { numero: 21, nome: "Folhas", imagem: "img/21.png" },
    { numero: 22, nome: "Sol", imagem: "img/22.png" },
    { numero: 23, nome: "Planeta Terra", imagem: "img/23.png" }, 
    { numero: 24, nome: "MTR", imagem: "img/24.png" },
    { numero: 25, nome: "Container de plastico", imagem: "img/25.png" },
    { numero: 26, nome: "Tanque", imagem: "img/26.png" },
    { numero: 27, nome: "Coleta de Efluente", imagem: "img/27.png" },
    { numero: 28, nome: "Madeira", imagem: "img/28.png" }, 
    { numero: 29, nome: "Residuos eletronicos", imagem: "img/29.png" }, 
    { numero: 30, nome: "Caçamba Roll-on", imagem: "img/30.png" }, 
    { numero: 31, nome: "Caçamba de rejeito", imagem: "img/31.png" }, 
    { numero: 32, nome: "Consumo consciente", imagem: "img/32.png" }, 
    { numero: 33, nome: "Caçamba de Varredura", imagem: "img/33.png" }, 
    { numero: 34, nome: "Vento", imagem: "img/34.png" }, 
    { numero: 35, nome: "Plástico Strech", imagem: "img/35.png" }, 
    { numero: 36, nome: "ANA", imagem: "img/36.png" }, 
    { numero: 37, nome: "Bombona de Rs", imagem: "img/37.png" }, 
    { numero: 38, nome: "Compostagem", imagem: "img/38.png" }, 
    { numero: 39, nome: "Container de papelão", imagem: "img/39.png" }, 
    { numero: 40, nome: "Container de rejeito", imagem: "img/40.png" }, 
    { numero: 41, nome: "Caçamba de metal", imagem: "img/41.png" }, 
    { numero: 42, nome: "Fauna", imagem: "img/42.png" }, 
    { numero: 43, nome: "Poluição visual", imagem: "img/43.png" }, 
    { numero: 44, nome: "Dia mundial de meio ambiente", imagem: "img/44.png" }, 
    { numero: 45, nome: "Coletor de Pilhas", imagem: "img/45.png" }, 
    { numero: 46, nome: "Reciclagem", imagem: "img/46.png" }, 
    { numero: 47, nome: "Ibama", imagem: "img/47.png" }, 
    { numero: 48, nome: "RAPP", imagem: "img/48.png" },
    { numero: 49, nome: "Big Bag", imagem: "img/49.png" }, 
    { numero: 50, nome: "Lixeira de Infectante", imagem: "img/50.png" }, 
    { numero: 51, nome: "Descarpack", imagem: "img/51.png" }, 
    { numero: 52, nome: "EPI_s contaminados", imagem: "img/52.png" },  
    { numero: 53, nome: "53-IBC", imagem: "img/53.png" }, 
    { numero: 54, nome: "Kit de mitigação ambiental", imagem: "img/54.png" }, 
    { numero: 55, nome: "SEMAD", imagem: "img/55.png" },
    { numero: 56, nome: "Outorga", imagem: "img/56.png" },
    { numero: 57, nome: "Poço artesiano", imagem: "img/57.png" },
    { numero: 58, nome: "FDS", imagem: "img/58.png" },
    { numero: 59, nome: "CAR", imagem: "img/59.png" },
    { numero: 60, nome: "Armazenamento de oleo", imagem: "img/60.png" },
    { numero: 61, nome: "Coprocessamento", imagem: "img/61.png" },
    { numero: 62, nome: "Pallet de contenção", imagem: "img/62.png" },
    { numero: 63, nome: "Lacre do bem", imagem: "img/63.png" },
    { numero: 64, nome: "Serragem", imagem: "img/64.png" },
    { numero: 65, nome: "Cone de Sinalização", imagem: "img/65.png" },
    { numero: 66, nome: "Aterro Sanitário", imagem: "img/66.png" }, 
    { numero: 67, nome: "Armazenamento de resíduos", imagem: "img/67.png" }, 
    { numero: 68, nome: "Hidrometro", imagem: "img/68.png" }, 
    { numero: 69, nome: "Horimetro", imagem: "img/69.png" }, 
    { numero: 70, nome: "Tanque de equalização", imagem: "img/70.png" },
    { numero: 71, nome: "Pallet", imagem: "img/71.png" },

  ];
  

    const sorteados = new Set();
 

function mostrarEPI() {
  const numero = parseInt(document.getElementById("numeroInput").value);
  const epi = epis.find(e => e.numero === numero);

  if (!epi) {
    alert("Número não encontrado!");
    return;
  }

  if (sorteados.has(epi.numero)) {
    alert("Este número já foi mostrado!");
    return;
  }

  // Atualiza o card principal
  document.getElementById("fotoEPI").src = epi.imagem;
  document.getElementById("numeroEPI").innerText = `Nº ${epi.numero}`;
  document.getElementById("nomeEPI").innerText = epi.nome;
 
  const historico = document.getElementById("historicoEPI");
  const item = document.createElement("div");
  item.classList.add("item-historico");
   
  item.innerHTML = `
    <span class="btn-excluir" onclick="removerDoHistorico(${epi.numero}, this.parentElement)">✖</span>
    <img src="${epi.imagem}" alt="${epi.nome}">
    <div class="numero">${epi.numero}</div>
    <div class="nome">${epi.nome}</div>
  `;
  
  historico.appendChild(item);
  historico.scrollLeft = historico.scrollWidth;

  sorteados.add(epi.numero); // marca como já mostrado
  document.getElementById("numeroInput").value = "";
}
 
function removerDoHistorico(numero, elementoHtml) { 
  sorteados.delete(numero);
   
  elementoHtml.remove();
 
  const numeroAtualCard = document.getElementById("numeroEPI").innerText;
  if (numeroAtualCard === `Nº ${numero}`) {
    document.getElementById("fotoEPI").src = "";
    document.getElementById("numeroEPI").innerText = "";
    document.getElementById("nomeEPI").innerText = "Sorteio Cancelado";
  }
}
