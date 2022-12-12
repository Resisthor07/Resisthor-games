let jogosCarregados;

function carregarMais(dados) {

    let stringHtml = "";
    let stringLinhas = "";

    containerDeJogos.className = "lista-jogos";

    if (primeiroCarregamento) {

        let imagemBanner = document.getElementById("samir-imagem-principal");
        imagemBanner.innerHTML = `<img src="img/quadro_de_itens/estrela_vazada.png" class="botao-favoritos jogo-da-lista" alt="favoritar" id="fav-${controleSamir}">           <a href="${dados[controleSamir].game_url}" target="_blank" id="banner-link">
                                        <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}" id="banner"/>
                                    </a>`;


        controleSamir++;

        lengthArr = dados.length;

        for (i = 0; i < 9 && controleSamir < lengthArr; i++) {

            if (lengthArr <= 10) {
                botaoCarregar.style.display = "none";
            }

            if (dados[controleSamir] == undefined) {
                return;
            }

            stringLinhas += `
                            <li class="jogo-da-lista">
                                <img src="img/quadro_de_itens/estrela_vazada.png" class="botao-favoritos" id="fav-${controleSamir}">
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

            if (dados[controleSamir] == undefined) {
                botaoCarregar.style.display = "none";
                return;
            }

            jogosCarregados.insertAdjacentHTML("beforeend", `
                            <li class="jogo-da-lista">
                                <img src="img/quadro_de_itens/estrela_vazada.png" class="botao-favoritos" id="fav-${controleSamir}">
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

    botaoCarregar.style.display = "unset";
}


function chamarFuncoes(dadosDoServidor) {
    dadosServidor = dadosDoServidor;
    limparTela();
    carregarMais(dadosDoServidor);
}

const jogosNaTela = [];

function criaBotoesFavoritar() {

    for (; controleFav < controleSamir; controleFav++) {

        let controle = controleFav;

        botoesFavoritar[controleFav] = document.getElementsByClassName("botao-favoritos")[controleFav];

        jogosNaTela[controleFav] = document.getElementsByClassName("jogo-da-lista")[controleFav];


        botoesFavoritar[controleFav].addEventListener("click", () => {
            eventoFavoritar(controle);
        });

        if (jogosNaTela[controleFav] != undefined) {

            jogosNaTela[controleFav].addEventListener("mouseover", () => {
                botoesFavoritar[controle].style.opacity = "1";
            });

            jogosNaTela[controleFav].addEventListener("mouseout", () => {
                botoesFavoritar[controle].style.opacity = "0";
            });
        }
    }
}

function eventoFavoritar(controle) {

    if (adicionadoFavoritosPreenchimento[controle]) {

        retiraDosFavoritos(controle);
        botoesFavoritar[controle].setAttribute("src", "img/quadro_de_itens/estrela_vazada.png");
        adicionadoFavoritosPreenchimento[controle] = false;

    } else {

        adicionaAosFavoritos(controle);
        botoesFavoritar[controle].setAttribute("src", "img/quadro_de_itens/estrela_preenchida.png");
        adicionadoFavoritosPreenchimento[controle] = true;

    }
}

function adicionaAosFavoritos(controle) {

    if (listaDeJogosFavoritos != 0) {

        for (i in listaDeJogosFavoritos) {

            if (dadosServidor[controle].id == listaDeJogosFavoritos[i].id) {
                return;
            }
        }
    }

    listaDeJogosFavoritos.push(dadosServidor[controle]);

}

function retiraDosFavoritos(controle) {

    let idBuscado = dadosServidor[controle].id;

    for (i in listaDeJogosFavoritos) {

        if (idBuscado == listaDeJogosFavoritos[i].id) {

            listaDeJogosFavoritos.splice(i, 1);
        }
    }
}

function verificaListaDeFavoritos() {

    for (i = 0; i < controleFav; i++) {

        for (j in listaDeJogosFavoritos) {

            if (listaDeJogosFavoritos[j].id == dadosServidor[i].id) {
                adicionadoFavoritosPreenchimento[i] = true;
                botoesFavoritar[i].setAttribute("src", "img/quadro_de_itens/estrela_preenchida.png");
            }
        }
    }
}

function mostrarBotaoFavoritar(controle) {
    botoesFavoritar[controle + 1].style.opacity = "1";
}

function esconderBotaoFavoritar(controle) {

}