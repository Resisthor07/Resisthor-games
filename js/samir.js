let jogosCarregados;


function carregarMais(dados, filtro) {
    let plataforma = plataformaRafael, genero = menu, regex = /[a-z]i/;

    if (regex.test(plataforma)) {
        plataforma = "Jogos";
    }

    if (regex.test(genero)) {
        genero = "";
    }

    let stringHtml = "";
    let stringLinhas = "";

    containerDeJogos.className = "lista-jogos";

    if (primeiroCarregamento) {

        let imagemBanner = document.getElementById("samir-imagem-principal");
        imagemBanner.innerHTML = `<div class="botao-favoritos" id="${controleSamir}"></div>
                                  <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}"/>`;
        controleSamir++;

        for (i = 0; i < 9 && controleSamir < dados.length; i++) {


            stringLinhas += `
                            <li>
                                <div class="botao-favoritos" id="${controleSamir}"></div>
                                <a href="${dados[controleSamir].game_url}" target="_blank">
                                    <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}">
                                </a>
                                <small>${dados[controleSamir].title}</small>
                            </li>
                            `;

            controleSamir++;
        }


    }


    if (!primeiroCarregamento) {

        let stringTemp = jogosCarregados.innerHTML;

        for (i = 0; i < 10; i++) {


            stringLinhas += `
                            <li>
                                <div class="botao-favoritos" id="favoritar${controleSamir}"></div>
                                <a href="${dados[controleSamir].game_url}" target="_blank">
                                    <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}">
                                </a>
                                <small>${dados[controleSamir].title}</small>
                            </li>
                            `;
            controleSamir++;

        }
        stringTemp += stringLinhas;

        jogosCarregados.innerHTML = stringTemp;
        criaBotoesFavoritar();
    }

    if (primeiroCarregamento) {
        stringHtml += `<ul id="jogos-carregados">${stringLinhas}</ul>`;
        containerDeJogos.innerHTML = stringHtml;
        jogosCarregados = document.getElementById("jogos-carregados");
        primeiroCarregamento = false;
        criaBotoesFavoritar();
    }

}

function limparTela() {

    controleSamir = 0;
    primeiroCarregamento = true;
    containerDeJogos.innerHTML = "";

}

function chamarFuncoes(dadosDoServidor) {
    dadosServidor = dadosDoServidor;
    limparTela();
    carregarMais(dadosDoServidor);
}

let botoesFavoritar = [];
let adicionadoFavoritos = [];
let controleFav = 0;

function criaBotoesFavoritar() {

    for (; controleFav < controleSamir; controleFav++) {

        botoesFavoritar[controleFav] = document.getElementsByClassName("botao-favoritos")[controleFav];

        console.log("Conteudo do vetor favoritar: " + botoesFavoritar + "\nTamanho do vetor: " + botoesFavoritar.length);
        console.log(controleFav);

        let controle = controleFav;
        botoesFavoritar[controleFav].addEventListener("click", () => {
            eventoFavoritar(controle);
        })
    }
}

function eventoFavoritar(controle) {

    if (adicionadoFavoritos[controle]) {
        botoesFavoritar[controle].style.backgroundColor = "unset";
        adicionadoFavoritos[controle] = false;
    } else {
        botoesFavoritar[controle].style.backgroundColor = "white";
        adicionadoFavoritos[controle] = true;
    }
}

function verificaAdicaoNosFavoritos() {

}
