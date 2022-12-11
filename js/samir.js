let jogosCarregados;


function carregarMais(dados) {

    let stringHtml = "";
    let stringLinhas = "";

    containerDeJogos.className = "lista-jogos";

    if (primeiroCarregamento) {

        let imagemBanner = document.getElementById("samir-imagem-principal");
        imagemBanner.innerHTML = `<img src="img/quadro_de_itens/estrela.svg" class="botao-favoritos" alt="favoritar" id="fav-${controleSamir}">
                                  <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}" id="banner"/>`;

        controleSamir++;

        for (i = 0; i < 9 && controleSamir < dados.length; i++) {

            stringLinhas += `
                            <li class="jogo-da-lista">
                                <img src="img/quadro_de_itens/estrela.svg" class="botao-favoritos" id="fav-${controleSamir}">
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

        for (i = 0; i < 10; i++) {

            jogosCarregados.insertAdjacentHTML("beforeend", `
                            <li class="jogo-da-lista">
                                <div class="botao-favoritos" id="favoritar${controleSamir}"></div>
                                <a href="${dados[controleSamir].game_url}" target="_blank">
                                    <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}">
                                </a>
                                <small>${dados[controleSamir].title}</small>
                            </li>
                            `);
            controleSamir++;

        }
    }

    if (primeiroCarregamento) {
        stringHtml += `<ul id="jogos-carregados">${stringLinhas}</ul>`;
        containerDeJogos.innerHTML = stringHtml;
        jogosCarregados = document.getElementById("jogos-carregados");
        primeiroCarregamento = false;
    }

    criaBotoesFavoritar();
    verificaListaDeFavoritos();
}


function limparTela() {

    controleSamir = 0;

    controleFav = 0;
    adicionadoFavoritosPreenchimento = [];

    primeiroCarregamento = true;
    containerDeJogos.innerHTML = "";

}


function chamarFuncoes(dadosDoServidor) {
    dadosServidor = dadosDoServidor;
    limparTela();
    carregarMais(dadosDoServidor);
}

let listaDeJogosFavoritos = [];
let botoesFavoritar = [];
let adicionadoFavoritosPreenchimento = [];
let controleFav = 0;


function criaBotoesFavoritar() {

    for (; controleFav < controleSamir; controleFav++) {

        let controle = controleFav;
        botoesFavoritar[controleFav] = document.getElementsByClassName("botao-favoritos")[controleFav];

        // console.log("Conteudo do vetor favoritar: " + botoesFavoritar + "\nTamanho do vetor: " + botoesFavoritar.length);
        // console.log("\nControleFav" + controleFav);

        botoesFavoritar[controleFav].addEventListener("click", () => {
            eventoFavoritar(controle);
        });
    }
}

function eventoFavoritar(controle) {
    // console.log("Adicionado aos favoritos - controle: " + controle);
    // console.log("\nJá setado:" + adicionadoFavoritosPreenchimento[controle]);

    if (adicionadoFavoritosPreenchimento[controle]) {

        retiraDosFavoritos(controle);
        botoesFavoritar[controle].style.backgroundColor = "unset";
        adicionadoFavoritosPreenchimento[controle] = false;

    } else {

        adicionaAosFavoritos(controle);
        botoesFavoritar[controle].style.backgroundColor = "white";
        adicionadoFavoritosPreenchimento[controle] = true;

    }
}

function adicionaAosFavoritos(controle) {

    if (listaDeJogosFavoritos != 0) {

        for (i in listaDeJogosFavoritos) {

            if (dadosServidor[controle].id == listaDeJogosFavoritos[i].id) {
                // console.log("Jogo já existe na lista de favoritos");
                return;
            }
        }
    }

    listaDeJogosFavoritos.push(dadosServidor[controle]);
    // console.log(listaDeJogosFavoritos);
}

function retiraDosFavoritos(controle) {

    let idBuscado = dadosServidor[controle].id;

    for (i in listaDeJogosFavoritos) {

        if (idBuscado == listaDeJogosFavoritos[i].id) {
            listaDeJogosFavoritos.splice(i, 1);
            // console.log(listaDeJogosFavoritos);
        }
    }
}

function verificaListaDeFavoritos() {

    for (i = 0; i < controleFav; i++) {

        for (j in listaDeJogosFavoritos) {

            if (listaDeJogosFavoritos[j].id == dadosServidor[i].id) {
                // console.log("Marcando novamente");
                botoesFavoritar[i].style.backgroundColor = "white";
            }
        }
    }
}

// function transformaSvg(imagem) {
//     fetch(imagem.src)
//         .then((response) => response.text())
//         .then((response) => {

//         })
// }