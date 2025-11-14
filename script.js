const epis =  [
  { numero: 1, nome: "4A's Controle de Pragas", imagem: "img/1.jpg", texto: "" },
  { numero: 2, nome: "Controle de Roedores", imagem: "img/2.jpg", texto: "" },
  { numero: 3, nome: "Controle de Baratas", imagem: "img/3.jpg", texto: "" },
  { numero: 4, nome: "Armadilha de Pombos", imagem: "img/4.jpg", texto: "" },
  { numero: 5, nome: "Calça de uniforme correta", imagem: "img/5.jpg", texto: "" },
  { numero: 6, nome: "Camisa de uniforme correta", imagem: "img/6.jpg", texto: "" },
  { numero: 7, nome: "Check list de limpeza", imagem: "img/7.jpg", texto: "" },
  { numero: 8, nome: "Perigo Físico - Fragmento de vidro", imagem: "img/8.jpg", texto: "" },
  { numero: 9, nome: "Perigo Físico - Fragmento de madeira", imagem: "img/9.jpg", texto: "" },
  { numero: 10, nome: "Perigo Físico – Metal", imagem: "img/10.jpg", texto: "" },
  { numero: 11, nome: "Perigo Químico – Produto de Limpeza", imagem: "img/11.jpg", texto: "" },
  { numero: 12, nome: "Perigo Químico – Lubrificante de Equipamentos", imagem: "img/12.jpg", texto: "" },
  { numero: 13, nome: "Perigo Biológico - Microorganismo", imagem: "img/13.jpg", texto: "" },
  { numero: 14, nome: "Análise de Dimensões", imagem: "img/14.jpg", texto: "" },
  { numero: 15, nome: "Análise Físico-Química", imagem: "img/15.jpg", texto: "" },
  { numero: 16, nome: "Análise de Controle de temperatura", imagem: "img/16.jpg", texto: "" },
  { numero: 17, nome: "Análise de Densidade", imagem: "img/17.jpg", texto: "" },
  { numero: 18, nome: "Equipamento - Medidor de AW", imagem: "img/18.jpg", texto: "" },
  { numero: 19, nome: "Equipamento - Medidor de Umidade", imagem: "img/19.jpg", texto: "" },
  { numero: 20, nome: "Equipamento – Medidor de COF", imagem: "img/20.jpg", texto: "" },
  { numero: 21, nome: "Equipamento – NIR", imagem: "img/21.jpg", texto: "" },
  { numero: 22, nome: "Matéria-prima – Milho", imagem: "img/22.jpg", texto: "" },
  { numero: 23, nome: "Matéria-prima – Sorgo", imagem: "img/23.jpg", texto: "" },
  { numero: 24, nome: "Matéria-prima – Farelo de Trigo", imagem: "img/24.jpg", texto: "" },
  { numero: 25, nome: "Matéria-prima – Óleo de Aves", imagem: "img/25.jpg", texto: "" },
  { numero: 26, nome: "Matéria-prima – Cenoura Desidratada", imagem: "img/26.jpg", texto: "" },
  { numero: 27, nome: "Matéria-prima – Polpa de Beterraba", imagem: "img/27.jpg", texto: "" },
  { numero: 28, nome: "Norma – Proibido Alimentos", imagem: "img/28.jpg", texto: "" },
  { numero: 29, nome: "Norma – Proibido Celulares", imagem: "img/29.jpg", texto: "" },
  { numero: 30, nome: "Norma – Proibido Colares", imagem: "img/30.jpg", texto: "" },
  { numero: 31, nome: "Norma – Proibido Pulseiras ou Brincos", imagem: "img/31.jpg", texto: "" },
  { numero: 32, nome: "Norma – Proibido Relógios ou Anéis", imagem: "img/32.jpg", texto: "" },
  { numero: 33, nome: "Produto Acabado – QSGC", imagem: "img/33.jpg", texto: "" },
  { numero: 34, nome: "Produto Acabado – QGGC-MC", imagem: "img/34.jpg", texto: "" },
  { numero: 35, nome: "Produto Acabado - QSGC-SBD", imagem: "img/35.jpg", texto: "" },
  { numero: 36, nome: "Produto Acabado - QSSRP", imagem: "img/36.jpg", texto: "" },
  { numero: 37, nome: "Produto Acabado - QSTARMG", imagem: "img/37.jpg", texto: "" },
  { numero: 38, nome: "Produto Acabado - QSDA", imagem: "img/38.jpg", texto: "" },
  { numero: 39, nome: "Produto Acabado - QLFRMG", imagem: "img/39.jpg", texto: "" },
  { numero: 40, nome: "Produto Acabado - QSTPOWER", imagem: "img/40.jpg", texto: "" },
  { numero: 41, nome: "Produto Acabado – QSTGC-CARNE", imagem: "img/41.jpg", texto: "" },
  { numero: 42, nome: "Produto Acabado - QSAL", imagem: "img/42.jpg", texto: "" },
  { numero: 43, nome: "Produto Acabado - QGARMG", imagem: "img/43.jpg", texto: "" },
  { numero: 44, nome: "Produto Acabado – QGARP", imagem: "img/44.jpg", texto: "" },
  { numero: 45, nome: "Embalagem – QSFRMG", imagem: "img/45.jpg", texto: "" },
  { numero: 46, nome: "Embalagem – QSGC", imagem: "img/46.jpg", texto: "" },
  { numero: 47, nome: "Embalagem - QSGCS+7", imagem: "img/47.jpg", texto: "" },
  { numero: 48, nome: "Embalagem – QSTGCMC", imagem: "img/48.jpg", texto: "" },
  { numero: 49, nome: "Embalagem – QSTARP", imagem: "img/49.jpg", texto: "" },
  { numero: 50, nome: "Embalagem – QSTFRP", imagem: "img/50.jpg", texto: "" },
  { numero: 51, nome: "Embalagem – QLFRMG", imagem: "img/51.jpg", texto: "" },
  { numero: 52, nome: "Embalagem - QLGC-AS", imagem: "img/52.jpg", texto: "" },
  { numero: 53, nome: "Embalagem – QGARP", imagem: "img/53.jpg", texto: "" },
  { numero: 54, nome: "Embalagem – QGGAP", imagem: "img/54.jpg", texto: "" },
  { numero: 55, nome: "Embalagem – QGGAC", imagem: "img/55.jpg", texto: "" },
  { numero: 56, nome: "Símbolo – BPF", imagem: "img/56.jpg", texto: "" },
  { numero: 57, nome: "Símbolo – HACCP", imagem: "img/57.jpg", texto: "" },
  { numero: 58, nome: "Símbolo – MAPA", imagem: "img/58.jpg", texto: "" },
  { numero: 59, nome: "Símbolo – SIF", imagem: "img/59.jpg", texto: "" },
  { numero: 60, nome: "Símbolo – PPHO", imagem: "img/60.jpg", texto: "" },
  { numero: 61, nome: "Símbolo – APPCC", imagem: "img/61.jpg", texto: "" },
  { numero: 62, nome: "Descarte correto de resíduo", imagem: "img/62.jpg", texto: "" },
  { numero: 63, nome: "Descarte incorreto de resíduo", imagem: "img/63.jpg", texto: "" },
  { numero: 64, nome: "Higinização correta das mãos", imagem: "img/64.jpg", texto: "" },
  { numero: 65, nome: "Treinamento", imagem: "img/65.jpg", texto: "" },
  { numero: 66, nome: "Uso de touca", imagem: "img/66.jpg", texto: "" },
  { numero: 67, nome: "Limpeza Industrial", imagem: "img/67.jpg", texto: "" },
  { numero: 68, nome: "5S - Senso de Ordenação", imagem: "img/68.jpg", texto: "" },
  { numero: 69, nome: "5S - Senso de Limpeza", imagem: "img/69.jpg", texto: "" },
  { numero: 70, nome: "5S - Senso de Utilização", imagem: "img/70.jpg", texto: "" },
  { numero: 71, nome: "5S - Senso de Disciplina", imagem: "img/71.jpg", texto: "" },
  { numero: 72, nome: "5S - Senso de Padronização", imagem: "img/72.jpg", texto: "" },
  { numero: 73, nome: "Ferramenta da Qualidade – Pareto", imagem: "img/73.jpg", texto: "" },
  { numero: 74, nome: "Ferramenta da Qualidade – Fluxograma", imagem: "img/74.jpg", texto: "" },
  { numero: 75, nome: "Ferramenta da Qualidade – Histograma", imagem: "img/75.jpg", texto: "" },
  { numero: 76, nome: "Ferramenta da Qualidade - Folhade Verificação", imagem: "img/76.jpg", texto: "" },
  { numero: 77, nome: "Ferramenta da Qualidade – Ishikawa", imagem: "img/77.jpg", texto: "" },
  { numero: 78, nome: "Ferramenta da Qualidade - Carta de Controle", imagem: "img/78.jpg", texto: "" },
  { numero: 79, nome: "Ferramenta da Qualidade - Diagrama de Dispersão", imagem: "img/79.jpg", texto: "" },
  { numero: 80, nome: "Valor Qualidade", imagem: "img/80.jpg", texto: "" }
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

      // Atualiza o card
      document.getElementById("fotoEPI").src = epi.imagem;
      document.getElementById("numeroEPI").innerText = `Nº ${epi.numero}`;
      document.getElementById("nomeEPI").innerText = epi.nome.toUpperCase();
      //document.getElementById("texto").innerText = epi.texto.toUpperCase();
      document.getElementById("historicoEPI").style.backgroundColor="white";

      // Adiciona ao histórico
      const historico = document.getElementById("historicoEPI");
      const item = document.createElement("div");
      item.classList.add("item-historico");
      item.innerHTML = `
        <img src="${epi.imagem}" alt="${epi.nome.toUpperCase()}">
        <div class="numero">${epi.numero}</div>
        <div class="nome">${epi.nome.toUpperCase()}</div>
      `;
      historico.prepend(item);

      sorteados.add(epi.numero); // marca como já mostrado
      document.getElementById("numeroInput").value = "";
    }
