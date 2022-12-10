let jogosCarregados;


function carregarMais(dados, filtro) {
    let plataforma = plataformaRafael, genero = menu, regex = /[a-z]i/;

    if (regex.test(plataforma)) {
        plataforma = "Jogos";
    }

    if (regex.test(genero)) {
        genero = "";
    }

    let stringHtml = `<h3>${plataforma} <br> ${genero}</h3>`;
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
                                <div class="botao-favoritos"></div>
                                <a href="${dados[controleSamir].game_url}">
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
                                    <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}">
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