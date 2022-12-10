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
        imagemBanner.innerHTML = `<img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}"/>`;
        controleSamir++;

        for (i = 0; i < 9 && controleSamir < dados.length; i++) {

            controleSamir++;
            stringLinhas += `
                            <li>
                                <div class="botao-favoritos" id="${controleSamir}"></div>
                                <a href="${dados[controleSamir].game_url}" target="_blank">
                                    <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}">
                                </a>
                                <small>${dados[controleSamir].title}</small>
                            </li>
                            `;
        }


    }


    if (!primeiroCarregamento) {

        let stringTemp = jogosCarregados.innerHTML;

        for (i = 0; i < 10; i++) {

            controleSamir++;
            stringLinhas += `
                            <li>
                                <div class="botao-favoritos" id="favoritar${controleSamir}"></div>
                                <a href="${dados[controleSamir].game_url}" target="_blank">
                                    <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}">
                                </a>
                                <small>${dados[controleSamir].title}</small>
                            </li>
                            `;

        }
        stringTemp += stringLinhas;

        jogosCarregados.innerHTML = stringTemp;
    }

    if (primeiroCarregamento) {
        stringHtml += `<ul id="jogos-carregados">${stringLinhas}</ul>`;
        containerDeJogos.innerHTML = stringHtml;
        jogosCarregados = document.getElementById("jogos-carregados");
        primeiroCarregamento = false;
    }
    criaBotoesFavoritar();
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
let botoesFavoritarNum = [];
let adicionadoFavoritos = [];

function criaBotoesFavoritar() {

    for (i in dadosServidor) {

        botoesFavoritar[i] = document.getElementsByClassName("botao-favoritos")[i];
        botoesFavoritarNum[i] = i;

        if (i < 9) {
            console.log(i);
            botoesFavoritar[i].addEventListener("click", () => {

                if (adicionadoFavoritos[0]) {
                    botoesFavoritar[0].style.backgroundColor = "unset";
                    adicionadoFavoritos[0] = false;
                } else {
                    botoesFavoritar[0].style.backgroundColor = "white";
                    adicionadoFavoritos[0] = true;
                }
            });
        }
    }
}

function eventoFavoritar() {
    alert("oii")
}
